import { WebsiteResolvers } from '../generated/graphqlgen';

export const Website: WebsiteResolvers.Type = {
  ...WebsiteResolvers.defaultResolvers,

  images: (parent, args, ctx) => {
    console.log(parent);
    return ctx.client.website({ id: parent.id }).images();
  },
  addedBy: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },
  typefaces: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },
};
