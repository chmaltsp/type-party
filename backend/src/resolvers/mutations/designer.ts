import { MutationResolvers } from '../../generated/graphqlgen';
import { ctxUser } from '../../utils';

interface DesingerMutations {
  addDesigner: MutationResolvers.AddDesignerResolver;
}

export const designer: DesingerMutations = {
  addDesigner: async (parent, args, ctx) => {
    const { userId } = ctxUser(ctx);
    return await ctx.client.createDesigner({
      ...args.input,
      addedBy: {
        connect: {
          id: userId,
        },
      },
    });
  },
};
