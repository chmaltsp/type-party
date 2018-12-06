import { MutationResolvers } from '../../generated/graphqlgen';

interface FoundryResolvers {
  addFoundry: MutationResolvers.AddFoundryResolver;
}
export const foundry: FoundryResolvers = {
  addFoundry: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },
};
