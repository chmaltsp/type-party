import { UserResolvers } from '../generated/graphqlgen';

export const User: UserResolvers.Type = {
  ...UserResolvers.defaultResolvers,

  websites: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },
};
