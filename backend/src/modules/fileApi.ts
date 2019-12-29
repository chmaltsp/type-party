import { S3 } from 'aws-sdk';
import { Context } from '../utils';
import { generate } from 'shortid';

import * as debugBase from 'debug';
import { File } from '../generated/prisma-client';

const debug = debugBase('s3');

const s3 = new S3({
  endpoint: process.env.S3_ENDPOINT,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  sessionToken:
    'FwoGZXIvYXdzEGwaDC7jqye+B8ZERaaEVCKwAZMgph9KdphPgC6bFEHmWRyOjYWFoJjMpD7oVKcqhsgKA81x9yvkGIHIA8aHz1kdHL9boAhftvLr6YAO2mqG12wH5RjSqpyn1e7+h2U7klje0bcoelHBbOh7XmAHCYfqUkJQglPVU8dx2I0SlEks2L2BUq2VAenwZeEcFrUdcy4UDZkE/jqO08hpOPuWqJRbxPzV8fETq8qypOzYjmAoBfwaTR7mD71JTzX6V4z4A3HWKJHeo/AFMi2WTnK40KJOMX0mhhOI7gWXZOhQyazXqD+OdCMnrg3lqh0Pj6GMhHjS+XAhiWY=',
  apiVersion: 'latest',
});

const TP_CDN = 'https://images.typeparty.com';

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
      CacheControl: 'max-age=3600',
      ACL: 'private',
    })
    .promise();

  const cdnPrefix = /localhost/.test(process.env.S3_ENDPOINT)
    ? process.env.S3_ENDPOINT
    : TP_CDN;

  // Get url
  const url = `${cdnPrefix}/${response.Key}`;

  // Prepare data to Sync with prisma
  const data = {
    filename,
    mimetype,
    url,
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
