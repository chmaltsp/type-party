import { S3, Endpoint } from 'aws-sdk';
import { Context } from '../utils';
import { generate } from 'shortid';

import * as debugBase from 'debug';
import { File } from '../generated/prisma-client';

const debug = debugBase('s3');

const s3 = new S3({
  endpoint: process.env.S3_ENDPOINT,
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  params: {
    Bucket: process.env.S3_BUCKET,
  },
  apiVersion: 'latest',
});

export const processUpload = async (upload, ctx: Context): Promise<File | null> => {
  if (!upload) {
    console.log('NO UPLOAD');
    return null;
  }
  const { stream, filename, mimetype, encoding } = await upload;

  // Generate Filename
  const key = `${generate()}-${filename}`;

  // Upload to S3
  const response = await s3
    .upload({
      Bucket: process.env.S3_BUCKET,
      Key: key,
      Body: stream,
      ACL: 'public-read',
    })
    .promise();

  // Get url
  const url = response.Location;

  // Prepare data to Sync with prisma
  const data = {
    filename,
    mimetype,
    url: response.Location,
    encoding,
  };

  // Sync with prisma
  const { id, createdAt, updatedAt } = await ctx.client.createFile({ ...data });

  // Prepare file type for resolver
  const file = {
    id,
    filename,
    mimetype,
    encoding,
    url,
    createdAt,
    updatedAt,
  };

  return file;
};
