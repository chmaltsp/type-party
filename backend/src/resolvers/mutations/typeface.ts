import { MutationResolvers } from '../../generated/graphqlgen';
import { ctxUser, Context } from '../../utils';
import { processUpload } from '../../modules/fileApi';

interface TypefaceMutations {
  updateTypeface: MutationResolvers.UpdateTypefaceResolver;
  addTypeface: MutationResolvers.AddTypefaceResolver;
}

export const typeface: TypefaceMutations = {
  async updateTypeface(parent, args, ctx: Context) {
    const { userId } = ctxUser(ctx);

    let fullFile;
    if (args.input.full) {
      fullFile = await processUpload(args.input.full, ctx);
    }

    const updateImages = () => {
      if (!fullFile) return {};
      const images = {
        update: {
          full: {},
        },
      };

      if (fullFile) {
        images.update.full = {
          connect: {
            id: fullFile.id,
          },
        };
      }

      return images;
    };

    // Clean up input for createWebsite
    delete args.input.full;
    return ctx.client.updateTypeface({
      where: {
        slug: args.input.slug,
      },
      data: {
        ...args.input,
        images: updateImages(),
        addedBy: {
          connect: {
            id: userId,
          },
        },
        foundries: {
          connect: args.input.foundries.map(foundry => ({
            id: foundry,
          })),
        },
        designers: {
          connect: args.input.designers.map(designer => ({
            id: designer,
          })),
        },
        tags: {
          connect: args.input.tags.map(tag => ({
            id: tag,
          })),
        },
      },
    });
  },

  addTypeface: async (parent, args, ctx) => {
    const { userId } = ctxUser(ctx);

    const fullFile = await processUpload(args.input.full, ctx);

    // Clean up input for createWebsite
    delete args.input.full;
    return await ctx.client.createTypeface({
      ...args.input,
      images: {
        create: {
          full: {
            connect: {
              id: fullFile.id,
            },
          },
        },
      },
      addedBy: {
        connect: {
          id: userId,
        },
      },
      foundries: {
        connect: args.input.foundries.map(foundry => ({
          id: foundry,
        })),
      },
      designers: {
        connect: args.input.designers.map(designer => ({
          id: designer,
        })),
      },
      tags: {
        connect: args.input.tags.map(tag => ({
          id: tag,
        })),
      },
    });
  },
};
