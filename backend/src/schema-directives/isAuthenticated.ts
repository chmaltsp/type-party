import { SchemaDirectiveVisitor } from 'graphql-tools';

import { GraphQLField, GraphQLEnumValue } from 'graphql';

interface IIsAuthenticated extends SchemaDirectiveVisitor {}
export class IsAuthenticated extends SchemaDirectiveVisitor {
  public visitFieldDefinition(field: GraphQLField<any, any>) {
    console.log(field, this.args);
    field.isDeprecated = true;
    field.deprecationReason = this.args.reason;
  }

  public visitEnumValue(value: GraphQLEnumValue) {
    value.isDeprecated = true;
    value.deprecationReason = this.args.reason;
  }
}

export default IsAuthenticated;
