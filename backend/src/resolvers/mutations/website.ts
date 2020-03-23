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

    let fullFile;
    if (args.input.full) {
      fullFile = await processUpload(args.input.full, ctx);
    }
    let thumbnailFile;
    if (args.input.thumbnail) {
      thumbnailFile = await processUpload(args.input.thumbnail, ctx);
    }

    const updateImages = () => {
      if (!fullFile && !thumbnailFile) return {};
      const images = {
        update: {
          full: {},
          thumbnail: {},
        },
      };

      if (fullFile) {
        images.update.full = {
          connect: {
            id: fullFile.id,
          },
        };
      }

      if (thumbnailFile) {
        images.update.thumbnail = {
          connect: {
            id: thumbnailFile.id,
          },
        };
      }

      return images;
    };

    // Clean up input for createWebsite
    delete args.input.full;
    delete args.input.thumbnail;
    return ctx.client.updateWebsite({
      where: {
        slug: args.input.slug,
      },
      data: {
        ...args.input,
        images: updateImages(),
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
