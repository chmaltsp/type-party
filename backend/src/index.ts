import { Prisma } from './generated/prisma';
import { Prisma as PrismaClient } from './generated/prisma-client';
import resolvers from './resolvers';

import * as cors from 'cors';
import { checkJwt } from './middleware/checkJwt';

import { Request } from 'express';
import * as express from 'express';

import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';

import { schemaDirectives } from './schema-directives';

import { loadTypedefsSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { addResolversToSchema } from '@graphql-tools/schema';

import { join } from 'path';
import { mergeTypeDefs } from '@graphql-tools/merge';

const typeDefs = loadTypedefsSync(join(__dirname, 'schema.graphql'), {
  loaders: [new GraphQLFileLoader()],
}).map((source) => source.document);

const prismaTypeDefs = loadTypedefsSync(join(__dirname, 'generated', 'prisma.graphql'), {
  loaders: [new GraphQLFileLoader()],
}).map((source) => source.document);

const types = [...typeDefs];

const mergedTypeDefs = mergeTypeDefs([...types], {});
// const schema = addResolversToSchema({
//   resolvers,
//   schema: schemaFile,
//   resolverValidationOptions: {
//     requireResolversForResolveType: false,
//   },
// })

const app = express();

const PORT = 4000;

const server = new ApolloServer({
  typeDefs: mergedTypeDefs,
  // @ts-ignore
  resolvers,
  schemaDirectives,
  context: (req) => ({
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

app.use(
  cors({
    origin: ['http://localhost:3000', 'https://www.typeparty.com'],

    methods: ['GET', 'PUT', 'POST', 'OPTIONS', 'DELETE', 'PATCH'],
  })
);
app.post('/', checkJwt, (err, req: Request, res, next) => {
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

server.applyMiddleware({ app });

app.listen(
  {
    port: PORT,
  },
  (options) => {
    console.log(`Server is running on http://localhost:4000`, options);
  }
);
