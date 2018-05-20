import { ctxUser, Context } from '../utils';

export const Query = {
  feed(parent, args, ctx: Context, info) {
    return ctx.db.query.posts({ where: { isPublished: true } }, info);
  },

  drafts(parent, args, ctx: Context, info) {
    const { userId: id } = ctxUser(ctx);

    const where = {
      isPublished: false,
      author: {
        id,
      },
    };

    return ctx.db.query.posts({ where }, info);
  },

  post(parent, { id }, ctx: Context, info) {
    return ctx.db.query.post({ where: { id: id } }, info);
  },

  me(parent, args, ctx: Context, info) {
    const { userId: id } = ctxUser(ctx);
    return ctx.db.query.user({ where: { id } }, info);
  },
  users(parent, args, ctx: Context, info) {
    return ctx.db.query.users({}, info);
  },
  userWebsites(parent, args, ctx: Context, info) {
    const { userId: id } = ctxUser(ctx);

    const where = {
      addedBy: {
        id,
      },
    };
    return ctx.db.query.websites(
      {
        where,
      },
      info
    );
  },
  websites(parent, args, ctx: Context, info) {
    return ctx.db.query.websites({}, info);
  },
};
