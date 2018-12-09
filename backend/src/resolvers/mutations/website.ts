import { ctxUser, Context } from '../../utils';
import { MutationResolvers } from '../../generated/graphqlgen';

interface WebsiteResolvers {
  addWebsite: MutationResolvers.AddWebsiteResolver;
}
export const website: WebsiteResolvers = {
  async addWebsite(parent, args, ctx: Context, info) {
    const { userId } = ctxUser(ctx);

    return ctx.client.createWebsite({
      ...args.input,
    });
    // return ctx.db.mutation.createWebsite(
    //   {
    //     data: {
    //       title,
    //       thumbnail,
    //       url,
    //       image,
    //       isPublished: false,
    //       featured: false,
    //       addedBy: {
    //         connect: { id: userId },
    //       },
    //     },
    //   },
    //   info
    // );
  },
};
