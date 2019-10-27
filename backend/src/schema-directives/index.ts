import { IsAuthenticated } from './isAuthenticated';
import { HasRole } from './hasRole';
import { IsOwner } from './isOwner';
import { SchemaDirectiveVisitor } from 'graphql-tools';

interface SchemaDirectives {
  [name: string]: typeof SchemaDirectiveVisitor;
}

export const schemaDirectives: SchemaDirectives = {
  isAuthenticated: IsAuthenticated,
  hasRole: HasRole,
  isOwner: IsOwner,
};
