import { MutationResolvers } from '../../generated/graphqlgen';
import { ctxUser } from '../../utils';

interface FoundryResolvers {
  addFoundry: MutationResolvers.AddFoundryResolver;
}
export const foundry: FoundryResolvers = {
  addFoundry: async (parent, args, ctx) => {
    const { userId: id } = ctxUser(ctx);

    const exists = await ctx.client.$exists.foundry({
      name: args.input.name,
    });

    if (exists) {
      throw new Error('This foundry already exists');
    }

    return ctx.client.createFoundry({
      ...args.input,
      addedBy: {
        connect: {
          id,
        },
      },
    });
  },
};
