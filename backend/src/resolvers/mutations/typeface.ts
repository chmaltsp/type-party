import { MutationResolvers } from '../../generated/graphqlgen';

interface TypefaceMutations {
  addTypeface: MutationResolvers.AddTypefaceResolver;
}

export const typeface: TypefaceMutations = {
  addTypeface: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },
};
