import { ctxUser, Context } from '../../utils';
import { MutationResolvers } from '../../generated/graphqlgen';
import { processUpload } from '../../modules/fileApi';

interface WebsiteResolvers {
  addWebsite: MutationResolvers.AddWebsiteResolver;
  updateWebsite: MutationResolvers.UpdateWebsiteResolver;
}
export const website: WebsiteResolvers = {
  async updateWebsite(parent, args, ctx: Context, info) {
    const { userId } = ctxUser(ctx);

    const fullFile = await processUpload(args.input.full, ctx);
    const thumbnailFile = await processUpload(args.input.thumbnail, ctx);

    // Clean up input for createWebsite
    delete args.input.full;
    delete args.input.thumbnail;
    return ctx.client.updateWebsite({
      where: {
        slug: args.input.slug,
      },
      data: {
        ...args.input,
        images: {
          create: {
            full: {
              connect: {
                id: fullFile.id,
              },
            },
            thumbnail: {
              connect: {
                id: thumbnailFile.id,
              },
            },
          },
        },
        typefaces: {
          connect: args.input.typefaces.map(typeface => ({
            id: typeface,
          })),
        },
        tags: {
          connect: args.input.tags.map(tag => ({
            id: tag,
          })),
        },
        addedBy: {
          connect: {
            id: userId,
          },
        },
      },
    });
  },
  async addWebsite(parent, args, ctx: Context, info) {
    const { userId } = ctxUser(ctx);

    const fullFile = await processUpload(args.input.full, ctx);
    const thumbnailFile = await processUpload(args.input.thumbnail, ctx);

    // Clean up input for createWebsite
    delete args.input.full;
    delete args.input.thumbnail;
    return ctx.client.createWebsite({
      ...args.input,
      images: {
        create: {
          full: {
            connect: {
              id: fullFile.id,
            },
          },
          thumbnail: {
            connect: {
              id: thumbnailFile.id,
            },
          },
        },
      },
      typefaces: {
        connect: args.input.typefaces.map(typeface => ({
          id: typeface,
        })),
      },
      tags: {
        connect: args.input.tags.map(tag => ({
          id: tag,
        })),
      },
      addedBy: {
        connect: {
          id: userId,
        },
      },
    });
  },
};
