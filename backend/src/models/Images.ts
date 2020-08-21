import { schema } from 'nexus';

schema.objectType({
  name: 'Image',
  definition(t) {
    t.model.id();
    t.model.File_FileToImage_thumbnailId({});
  },
});
