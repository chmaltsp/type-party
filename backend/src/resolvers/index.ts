import { Query } from './Query';
import { auth } from './mutations/auth';
import { file } from './mutations/file';
import { website } from './mutations/website';
import { AuthPayload } from './AuthPayload';
import { typeface } from './mutations/typeface';
import { designer } from './mutations/designer';
import { foundry } from './mutations/foundry';
import { User } from './User';
import { Resolvers } from '../generated/graphqlgen';

const resolvers: Pick<Resolvers, 'Query' | 'Mutation' | 'AuthPayload' | 'User'> = {
  Query,
  Mutation: {
    ...auth,
    ...foundry,
    ...website,
    ...file,
    ...typeface,
    ...designer,
  },
  AuthPayload,
  User,
};

export default resolvers;
