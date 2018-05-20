import { ctxUser, Context } from '../../utils';

export const post = {
  async createDraft(parent, { title, text }, ctx: Context, info) {
    const { userId } = ctxUser(ctx);
    return ctx.db.mutation.createPost(
      {
        data: {
          title,
          text,
          isPublished: false,
          author: {
            connect: { id: userId },
          },
        },
      },
      info
    );
  },

  async publish(parent, { id }, ctx: Context, info) {
    return await ctx.db.exists.Website({
      id,
      title: 'blah',
    });
  },

  async deletePost(parent, { id }, ctx: Context, info) {
    const { userId } = ctxUser(ctx);
    const postExists = await ctx.db.exists.Post({
      id,
      author: { id: userId },
    });
    if (!postExists) {
      throw new Error(`Post not found or you're not the author`);
    }

    return ctx.db.mutation.deletePost({ where: { id } });
  },
};
