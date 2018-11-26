import { Query } from './Query';
import { auth } from './mutations/auth';
import { file } from './mutations/file';
import { website } from './mutations/website';
import { AuthPayload } from './AuthPayload';

export default {
  Query,
  Mutation: {
    ...auth,
    ...website,
    ...file,
  },
  AuthPayload,
};
