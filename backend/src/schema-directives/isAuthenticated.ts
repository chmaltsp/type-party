import { SchemaDirectiveVisitor } from 'graphql-tools';
import { defaultFieldResolver } from 'graphql';

import { Context } from '../utils';
import { isLoggedIn } from '../utils/auth';

import { GraphQLField, GraphQLEnumValue } from 'graphql';

export class IsAuthenticated extends SchemaDirectiveVisitor {
  public visitFieldDefinition(field: GraphQLField<any, any>, details) {
    const { resolve = defaultFieldResolver } = field;

    field.resolve = async function(...resolveArgs) {
      const [source, args, ctx, info] = resolveArgs;

      isLoggedIn(ctx);

      return resolve.apply(this, resolveArgs);
    };
  }
}

export default IsAuthenticated;
