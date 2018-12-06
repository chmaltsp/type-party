import { ctxUser } from '../utils';
import { QueryResolvers } from '../generated/graphqlgen';

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  me(parent, args, ctx, info) {
    const { userId: id } = ctxUser(ctx);
    return ctx.db.query.user({ where: { id } }, info);
  },
  users(parent, args, ctx, info) {
    return ctx.db.query.users({}, info);
  },
  userWebsites(parent, args, ctx, info) {
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
  websites(parent, args, ctx, info) {
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
  findDesigners: (parent, args, ctx) => {
    return ctx.client.designers({
      where: {
        name_contains: args.search,
      },
    });
  },
};
