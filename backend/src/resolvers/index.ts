import { Query } from './Query';
import { auth } from './Mutation/auth';
import { post } from './Mutation/post';
import { website } from './Mutation/website';
import { AuthPayload } from './AuthPayload';

export default {
  Query,
  Mutation: {
    ...auth,
    ...post,
    ...website,
  },
  AuthPayload,
};
