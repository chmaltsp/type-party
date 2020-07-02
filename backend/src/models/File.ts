import { schema } from 'nexus';

schema.objectType({
  name: 'File',
  definition(t) {
    t.model.id();
    t.model.url();
  },
});
