import * as jwt from 'express-jwt';

export const checkJwt = jwt({
  secret: process.env.APP_SECRET,
  credentialsRequired: false,
});
