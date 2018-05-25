import { SchemaDirectiveVisitor } from 'graphql-tools';
import { defaultFieldResolver } from 'graphql';

import { Context } from '../utils';
import { isLoggedIn } from '../utils/auth';

import { GraphQLField, GraphQLEnumValue } from 'graphql';

import { Role } from '../generated/prisma';

export class HasRole extends SchemaDirectiveVisitor {
  public visitFieldDefinition(field: GraphQLField<any, Context>) {
    /**
     * Required roles passed in from schema
     */
    const requiredRoles: Role[] = this.args.requires;
    const { resolve = defaultFieldResolver } = field;

    field.resolve = async function(...resolveArgs) {
      const [source, args, ctx] = resolveArgs;
      const { role } = isLoggedIn(ctx);

      if (!requiredRoles.includes(role)) {
        throw new Error(`You must have ${requiredRoles.map(role => `${role} `)} role`);
      }

      return resolve.apply(this, resolveArgs);
    };
  }
}

export default HasRole;
