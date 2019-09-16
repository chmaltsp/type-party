import { MutationResolvers } from '../../generated/graphqlgen';
import { ctxUser } from '../../utils';

interface TagResolvers {
  addTag: MutationResolvers.AddTagResolver;
}
export const tag: TagResolvers = {
  addTag: async (parent, args, ctx) => {
    const exists = await ctx.client.$exists.tag({
      name: args.input.name,
    });

    if (exists) {
      throw new Error('This tag already exists');
    }

    return ctx.client.createTag({
      ...args.input,
    });
  },
};
