import { Context } from '../../utils';
import { processUpload } from '../../modules/fileApi';
import { MutationResolvers } from '../../generated/graphqlgen';

interface FileResolver {
  uploadImage: MutationResolvers.UploadImageResolver;
}
export const file: FileResolver = {
  async uploadImage(parent, { file }, ctx, info) {
    // console.log(file);
    return await processUpload(file, ctx);
  },
};
