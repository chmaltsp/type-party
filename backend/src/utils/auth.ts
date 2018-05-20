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
  console.log('INSIDE CHECK', {
    userId,
    type,
    typeId,
    typeField,
  });

  const existsInput = {
    author: {
      id: '2312321',
    },
  };

  //   existsInput[typeField] = {
  //     id: userId,
  //   };

  console.log('EXISTS IF OWNER ARGS', existsInput);
  return ctx.db.exists.Post({ title: 'fake' });
};

// export function validateJwt(ctx: Context) {
//   const Authorization = ctx.request.get('Authorization');
//   if (Authorization) {
//     const token = Authorization.replace('Bearer ', '');
//     const { userId, role } = jwt.verify(token, process.env.APP_SECRET) as {
//       userId: string;
//       role: string;
//     };
//     return { userId, role };
//   }

//   throw new AuthError();
// }

// export class AuthError extends Error {
//   constructor() {
//     super('Not authorized');
//   }
// }
