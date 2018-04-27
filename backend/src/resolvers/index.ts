import { Query } from './Query';
import { auth } from './mutations/auth';
import { post } from './mutations/post';
import { file } from './mutations/file';
import { website } from './mutations/website';
import { AuthPayload } from './AuthPayload';

export default {
  Query,
  Mutation: {
    ...auth,
    ...post,
    ...website,
    ...file,
  },
  AuthPayload,
};
