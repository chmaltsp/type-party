module.exports = {
  client: {
    service: {
      name: 'backend',
      localSchemaFile: './schema.json',
    },
    excludes: ['src/clientSchema.graphql'],
  },
};
