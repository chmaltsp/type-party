import { ctxUser } from '../utils';
import { QueryResolvers } from '../generated/graphqlgen';
import { WebsiteWhereInput } from '../generated/prisma';

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
  async websites(parent, args, ctx) {
    let where: WebsiteWhereInput = {};

    let after = args.input && args.input.after;

    let skip = (args.input && args.input.skip) || 0;

    if (args.input.randomize) {
      try {
        const count = await ctx.client.websitesConnection().aggregate().count();

        const min = 0;
        const max = Math.floor(count - args.input.first || 10);
        const randomSkip = () => Math.floor(Math.random() * (max - min + 1));

        where = {
          id_not: args.input.after,
        };

        after = undefined;

        skip = randomSkip();
      } catch (error) {
        console.log(error);
      }
    }

    if (args.input.featured) {
      where = {
        ...where,
        featured: true,
      };
    }

    return ctx.client.websites({
      first: (args.input && args.input.first) || 10,
      skip,
      after,
      orderBy: 'createdAt_DESC',
      where,
    });
  },
  websitesCount(parent, args, ctx) {
    return ctx.client.websitesConnection().aggregate().count();
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
