import { SchemaDirectiveVisitor } from 'graphql-tools';
import { defaultFieldResolver } from 'graphql';

import { Context } from '../utils';
import { isLoggedIn, isRequestingUserAlsoOwner } from '../utils/auth';

import { GraphQLField, GraphQLEnumValue } from 'graphql';

export class IsOwner extends SchemaDirectiveVisitor {
  public visitFieldDefinition(field: GraphQLField<any, any>, details) {
    // console.log('DETAILS', details.objectType);
    // console.log('SchemaVisitorArgs', this.args);
    const type = this.args.type;
    const typeField = this.args.field;

    const { resolve = defaultFieldResolver } = field;

    field.resolve = async function(...resolveArgs) {
      const [source, args, ctx, info] = resolveArgs;
      //   console.log('SOURCE INSIDE FIELD RESOLVE', source);
      //   console.log('ARGS INSIDE FIELD RESOLVE', args);
      // console.log('INFO INSIDE FIELD RESOLVE', info.fieldNodes);

      const { id: typeId } = args;
      const { userId } = isLoggedIn(ctx);

      const isOwner = await isRequestingUserAlsoOwner({
        ctx,
        userId,
        typeId,
        type,
        typeField,
      });

      console.log('IN DIRECTIVE RESOLVER', isOwner);

      if (!isOwner) throw new Error('Unauthorized must be owner of this resource');

      return resolve.apply(this, resolveArgs);
    };
  }
}

export default IsOwner;
