module.exports = {
  client: {
    service: {
      localSchemaFile: './schema.json',
      name: 'backend',
    },
    excludes: ['src/clientSchema.graphql'],
  },
};
