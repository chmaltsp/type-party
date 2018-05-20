import * as jwt from 'jsonwebtoken';
import { Context, ctxUser } from './';

export const isLoggedIn = (ctx: Context) => {
  const user = ctxUser(ctx);
  // If there is no user property on request then throw error.
  if (!user) throw new Error('Not Logged In!');

  return user;
};

type IisRequestingUserAlsoOwnerInput = {
  ctx: Context;
  userId: string;
  type: string;
  typeId: string;
  typeField?: string;
};
export const isRequestingUserAlsoOwner = ({
  ctx,
  userId,
  type,
  typeId,
  typeField = 'user',
}: IisRequestingUserAlsoOwnerInput) => {
  const existsInput = {
    id: typeId,
  };

  existsInput[typeField] = {
    id: userId,
  };

  // TODO remove when prisma 2.0 patch comes out
  //@ts-ignore
  return ctx.db.exists.Post({ where: existsInput });
};
