import { MutationResolvers } from '../../generated/graphqlgen';
import { ctxUser } from '../../utils';
import { processUpload } from '../../modules/fileApi';

interface TypefaceMutations {
  addTypeface: MutationResolvers.AddTypefaceResolver;
}

export const typeface: TypefaceMutations = {
  addTypeface: async (parent, args, ctx) => {
    const { userId } = ctxUser(ctx);

    console.log(args);

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
