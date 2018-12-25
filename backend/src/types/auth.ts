import { User } from '../generated/prisma';
export interface AuthPayload {
  token: string;
  user: User;
}
