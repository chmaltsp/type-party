import { Context, ctxUser } from '../utils';
import { AuthPayloadResolvers } from '../generated/graphqlgen';

export const AuthPayload: AuthPayloadResolvers.Type = {
  ...AuthPayloadResolvers.defaultResolvers,
  user: async (parent, args, ctx: Context, info) => {
    return ctx.db.query.user({ where: { id: parent.user.id } }, info);
  },
};
