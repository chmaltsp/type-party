import { Context } from '../../utils';
import { processUpload } from '../../modules/fileApi';

export const file = {
  async uploadImage(parent, { file }, ctx: Context, info) {
    // console.log(file);
    return await processUpload(file, ctx);
  },
};
