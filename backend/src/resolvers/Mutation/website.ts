import { getUserId, Context } from '../../utils';

export const website = {
  async addWebsite(parent, { title, thumbnail, url, image }, ctx: Context, info) {
    const userId = getUserId(ctx);
    return ctx.db.mutation.createWebsite(
      {
        data: {
          title,
          thumbnail,
          url,
          image,
          isPublished: false,
          featured: false,
          addedBy: {
            connect: { id: userId },
          },
        },
      },
      info
    );
  },
};
