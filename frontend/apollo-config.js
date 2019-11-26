module.exports = {
  client: {
    excludes: ['src/clientSchema.graphql'],
    service: {
      localSchemaFile: './schema.json',
      name: 'backend',
    },
  },
};
