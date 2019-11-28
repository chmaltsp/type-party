import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from './generated/prisma';
import { Prisma as PrismaClient } from './generated/prisma-client';
import resolvers from './resolvers';

import * as cors from 'cors';
import { checkJwt } from './middleware/checkJwt';

import { schemaDirectives } from './schema-directives';
import { Request } from 'express';

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',

  // @ts-ignore
  resolvers,
  schemaDirectives,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
  context: req => ({
    ...req,
    client: new PrismaClient({
      endpoint: process.env.PRISMA_ENDPOINT,
      secret: process.env.PRISMA_SECRET,
      debug: true,
    }),
    db: new Prisma({
      endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma DB service (value is set in .env)
      secret: process.env.PRISMA_SECRET, // taken from database/prisma.yml (value is set in .env)
      debug: true, // log all GraphQL queries & mutations
    }),
  }),
});

server.express.use(
  cors({
    origin: ['http://localhost:3000', 'https://www.typeparty.com'],

    methods: ['GET', 'PUT', 'POST', 'OPTIONS', 'DELETE', 'PATCH'],
    // preflightContinue: true,
  })
);
server.express.post(server.options.endpoint, checkJwt, (err, req: Request, res, next) => {
  if (err) {
    console.log(err);
    return res.status(401).json({
      error: {
        message: err.message,
      },
    });
  }
  next();
});

server.start(
  {
    debug: true,
  },
  options => {
    console.log(`Server is running on http://localhost:4000`, options);
  }
);
