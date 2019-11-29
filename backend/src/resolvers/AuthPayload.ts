import { Context, ctxUser } from '../utils';
import { AuthPayloadResolvers } from '../generated/graphqlgen';

export const AuthPayload: AuthPayloadResolvers.Type = {
  ...AuthPayloadResolvers.defaultResolvers,
  user: async (parent, args, ctx: Context) => {
    return ctx.client.user({
      id: parent.user.id,
    });
  },
};
