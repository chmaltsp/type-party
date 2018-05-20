import { Prisma } from '../generated/prisma';
import { Request } from 'express';

export const ctxUser = (ctx: Context) => ctx.request.user;

interface Irequest extends Request {
  user?: {
    userId: string;
    role: string;
  };
}
export interface Context {
  db: Prisma;
  request: Irequest;
}
