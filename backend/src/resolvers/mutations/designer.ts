import { MutationResolvers } from '../../generated/graphqlgen';
import { ctxUser } from '../../utils';

interface DesingerMutations {
  addDesigner: MutationResolvers.AddDesignerResolver;
}

export const designer: DesingerMutations = {
  addDesigner: async (parent, args, ctx) => {
    const { userId } = ctxUser(ctx);

    const exists = await ctx.client.$exists.designer({
      name: args.input.name,
    });

    if (exists) throw new Error('This designer already exists');

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
