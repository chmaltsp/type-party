import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { Context } from '../../utils';

import { MutationResolvers } from '../../generated/graphqlgen';

interface AuthResolvers {
  signup: MutationResolvers.SignupResolver;
  login: MutationResolvers.LoginResolver;
}
export const auth: AuthResolvers = {
  async signup(parent, args, ctx, info) {
    const password = await bcrypt.hash(args.password, 10);
    const user = await ctx.db.mutation.createUser({
      data: { ...args, password },
    });

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET, {
        expiresIn: '7d',
      }),
      user,
    };
  },

  async login(parent, { email, password }, ctx: Context, info) {
    const user = await ctx.db.query.user({ where: { email } });
    if (!user) {
      throw new Error(`No such user found for email: ${email}`);
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('Invalid password');
    }

    return {
      token: jwt.sign({ userId: user.id, role: user.role }, process.env.APP_SECRET, {
        expiresIn: '7d',
      }),
      user,
    };
  },
};
