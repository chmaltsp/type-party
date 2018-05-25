import { SchemaDirectiveVisitor } from 'graphql-tools';
import { defaultFieldResolver } from 'graphql';

import { Context } from '../utils';
import { isLoggedIn, isRequestingUserAlsoOwner } from '../utils/auth';

import { GraphQLField, GraphQLEnumValue } from 'graphql';

import { Role, Exists } from '../generated/prisma';

export class IsOwnerOrHasRole extends SchemaDirectiveVisitor {
  public visitFieldDefinition(field: GraphQLField<any, Context>) {
    // console.log('SchemaVisitorArgs', this.args);
    const type = <keyof Exists>this.args.type;
    const typeField = <string>this.args.field;
    const requiredRoles = <Role>this.args.required;

    const { resolve = defaultFieldResolver } = field;

    field.resolve = async function(...resolveArgs) {
      const [source, args, ctx, info] = resolveArgs;
      //   console.log('SOURCE INSIDE FIELD RESOLVE', source);
      //   console.log('ARGS INSIDE FIELD RESOLVE', args);
      // console.log('INFO INSIDE FIELD RESOLVE', info.fieldNodes);

      const { id: typeId } = args;
      const { userId, role } = isLoggedIn(ctx);

      if (requiredRoles.includes(role)) return resolve.apply(this, resolveArgs);

      const isOwner = await isRequestingUserAlsoOwner({
        ctx,
        userId,
        typeId,
        type,
        typeField,
      });

      if (isOwner) return resolve.apply(this, resolveArgs);

      throw new Error('Unauthorized! Must be owner of this resource or have role');
    };
  }
}

export default IsOwnerOrHasRole;
