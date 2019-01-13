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
  findFoundries: (parent, args, ctx) => {
    return ctx.client.foundries({
      where: {
        name_contains: args.search,
      },
    });
  },
  website: async (parent, args, ctx) => {
    const input = {
      slug: args.slug,
    };
    const exists = await ctx.client.$exists.website(input);

    if (!exists) {
      throw new Error(`${args.slug} is not a website`);
    }

    const website = await ctx.client.website(input);

    console.log(website);
    const full = await ctx.client
      .website(input)
      .images()
      .full();

    const thumbnail = await ctx.client
      .website({
        slug: args.slug,
      })
      .images()
      .thumbnail();

    const typefaces = await ctx.client.website(input).typefaces();
    // return {
    //   ...website,
    //   images: {
    //     full,
    //     thumbnail,
    //   },
    //   typefaces,
    // };

    return ctx.client.website(input);
  },
};
