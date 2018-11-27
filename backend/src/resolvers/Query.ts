import { ctxUser, Context } from '../utils';
import { QueryResolvers } from '../generated/graphqlgen';

export const Query: QueryResolvers.Type = {
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
  findTypefaces: (parent, args, ctx) => {
    return ctx.client.typefaces({
      where: {
        name_contains: args.search,
      },
      first: 5,
    });
  },
};
