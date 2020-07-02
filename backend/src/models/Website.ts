import { schema } from 'nexus';
schema.objectType({
  name: 'Website',
  definition(t) {
    // the fields of the type will be defined here
    t.model.id();
    t.model.title();
    t.model.addedBy();
    t.model.User({});
  },
});

schema.extendType({
  type: 'Query',
  definition(t) {
    t.crud.websites();
    t.crud.users();
  },
});
