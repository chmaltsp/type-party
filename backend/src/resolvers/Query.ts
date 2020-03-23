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
  websites(parent, args, ctx) {
    return ctx.client.websites({
      first: (args.input && args.input.first) || 10,
      skip: (args.input && args.input.skip) || 0,
      after: (args.input && args.input.after) || undefined,
    });
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
  findFoundries: (parent, args, ctx) => {
    return ctx.client.foundries({
      where: {
        name_contains: args.search,
      },
    });
  },
  findTags: (parent, args, ctx) => {
    return ctx.client.tags({
      where: {
        name_contains: args.search,
      },
    });
  },
  typefaces: async (parent, args, ctx) => {
    return ctx.client.typefaces({});
  },
  website: async (parent, args, ctx) => {
    const input = {
      slug: args.slug,
    };
    const exists = await ctx.client.$exists.website(input);

    if (!exists) {
      throw new Error(`${args.slug} is not a website`);
    }

    return ctx.client.website(input);
  },
  typeface: async (parent, args, ctx) => {
    const input = {
      slug: args.slug,
    };
    const exists = await ctx.client.$exists.typeface(input);

    if (!exists) {
      throw new Error(`${args.slug} is not a typeface`);
    }

    return ctx.client.typeface(input);
  },
};
