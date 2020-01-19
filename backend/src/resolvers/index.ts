import { Query } from './Query';
import { auth } from './mutations/auth';
import { file } from './mutations/file';
import { website } from './mutations/website';
import { AuthPayload } from './AuthPayload';
import { typeface } from './mutations/typeface';
import { designer } from './mutations/designer';
import { Images } from './Images';
import { foundry } from './mutations/foundry';

import { Website } from './Website';
import { Typeface } from './Typeface';
import { User } from './User';
import { Resolvers } from '../generated/graphqlgen';
import { tag } from './mutations/tag';
import { mailchimp } from './mutations/mailchimp';

const resolvers: Pick<
  Resolvers,
  'Query' | 'Mutation' | 'AuthPayload' | 'User' | 'Website' | 'Images' | 'Typeface'
> = {
  Query,
  Mutation: {
    ...auth,
    ...foundry,
    ...website,
    ...file,
    ...typeface,
    ...designer,
    ...tag,
    ...mailchimp,
  },
  AuthPayload,
  User,
  Images,
  Website,
  Typeface,
};

export default resolvers;
