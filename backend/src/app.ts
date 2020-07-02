import { log, settings, use } from 'nexus';
import { prisma } from 'nexus-plugin-prisma';
use(
  prisma({
    migrations: false,
    features: {
      crud: true,
    },
  })
);
settings.change({
  server: {
    startMessage: (info) => {
      settings.original.server.startMessage(info);
    },
  },
  schema: {
    generateGraphQLSDLFile: './src/generated/nexus.graphql',
  },
});
