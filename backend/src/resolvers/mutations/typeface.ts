import { MutationResolvers } from '../../generated/graphqlgen';
import { ctxUser } from '../../utils';

interface TypefaceMutations {
  addTypeface: MutationResolvers.AddTypefaceResolver;
}

export const typeface: TypefaceMutations = {
  addTypeface: async (parent, args, ctx) => {
    const { userId } = ctxUser(ctx);
    return await ctx.client.createTypeface({
      ...args.input,
      addedBy: {
        connect: {
          id: userId,
        },
      },
    });
  },
};
