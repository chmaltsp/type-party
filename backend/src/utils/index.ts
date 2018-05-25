import { Prisma } from '../generated/prisma';
import { Request } from 'express';

import { Role } from '../generated/prisma';

export const ctxUser = (ctx: Context) => ctx.request && ctx.request.user;
interface Irequest extends Request {
  user?: {
    userId: string;
    role: Role;
  };
}
export interface Context {
  db: Prisma;
  request: Irequest;
}
