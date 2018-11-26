import { Query } from './Query';
import { auth } from './mutations/auth';
import { file } from './mutations/file';
import { website } from './mutations/website';
import { AuthPayload } from './AuthPayload';
import { typeface } from './mutations/typeface';

export default {
  Query,
  Mutation: {
    ...auth,
    ...website,
    ...file,
    ...typeface,
  },
  AuthPayload,
};
