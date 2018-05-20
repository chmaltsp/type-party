import { SchemaDirectiveVisitor } from 'graphql-tools';
import { defaultFieldResolver } from 'graphql';

import { Context } from '../utils';
import { isLoggedIn } from '../utils/auth';

import { GraphQLField, GraphQLEnumValue } from 'graphql';

export class HasRole extends SchemaDirectiveVisitor {
  public visitFieldDefinition(field: GraphQLField<any, any>, details) {
    // console.log('DETAILS', details.objectType);
    // console.log('SchemaVisitorArgs', this.args);
    const requiredRole = this.args.requires;

    const { resolve = defaultFieldResolver } = field;

    field.resolve = async function(...resolveArgs) {
      const [source, args, ctx, info] = resolveArgs;
      // console.log('SOURCE INSIDE FIELD RESOLVE', source);
      // console.log('ARGS INSIDE FIELD RESOLVE', args);
      // console.log('INFO INSIDE FIELD RESOLVE', info.fieldNodes);

      const { role } = isLoggedIn(ctx);

      if (role !== requiredRole) {
        throw new Error(`You must be a ${requiredRole}`);
      }

      return resolve.call(this, resolveArgs);
    };
  }
}

export default HasRole;
