import { SchemaDirectiveVisitor } from 'graphql-tools';
import { defaultFieldResolver } from 'graphql';

import { Context, getUserId } from '../utils';

import { GraphQLField, GraphQLEnumValue } from 'graphql';

export class IsAuthenticated extends SchemaDirectiveVisitor {
  public visitFieldDefinition(field: GraphQLField<any, any>) {
    const { resolve = defaultFieldResolver } = field;

    field.resolve = async function(...resolveArgs) {
      const [source, args, ctx] = resolveArgs;
      // console.log('SOURCE INSIDE FIELD RESOLVE', source);
      // console.log('ARGS INSIDE FIELD RESOLVE', args);
      console.log('HEADERS', getUserId(ctx));
      const result = await resolve.apply(this, resolveArgs);
      if (typeof result === 'string') {
        return result.toUpperCase();
      }
      return result;
    };
  }
}

export default IsAuthenticated;
