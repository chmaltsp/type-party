import { ImagesResolvers } from '../generated/graphqlgen';

export const Images: ImagesResolvers.Type = {
  ...ImagesResolvers.defaultResolvers,
  website: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },
  typeface: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },
  thumbnail: (parent, args, ctx) => {
    return ctx.client
      .images({
        id: parent.id,
      })
      .thumbnail();
  },
  full: (parent, args, ctx) => {
    return ctx.client
      .images({
        id: parent.id,
      })
      .full();
  },
};
