import { schema } from 'nexus';
schema.objectType({
  name: 'User',
  definition(t) {
    // the fields of the type will be defined here
    t.model.id();
    t.model.email();
    t.model.Website({});
  },
});
