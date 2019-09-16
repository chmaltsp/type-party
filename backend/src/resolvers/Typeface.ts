// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { TypefaceResolvers } from '../generated/graphqlgen';

export const Typeface: TypefaceResolvers.Type = {
  ...TypefaceResolvers.defaultResolvers,

  usedBy: (parent, args, ctx) => {
    return ctx.client.typeface({ id: parent.id }).usedBy();
  },
  addedBy: (parent, args, ctx) => {
    return ctx.client.typeface({ id: parent.id }).addedBy();
  },
  foundries: (parent, args, ctx) => {
    return ctx.client.typeface({ id: parent.id }).foundries();
  },
  designers: (parent, args, ctx) => {
    return ctx.client.typeface({ id: parent.id }).designers();
  },
  tags: (parent, args, ctx) => {
    return ctx.client.typeface({ id: parent.id }).tags();
  },
  images: (parent, args, ctx) => {
    return ctx.client.typeface({ id: parent.id }).images();
  },
};
