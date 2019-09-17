/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: TypefaceFoundries
// ====================================================

export interface TypefaceFoundries_foundries {
  __typename: "Foundry";
  id: string;
  name: string;
  url: string;
}

export interface TypefaceFoundries {
  __typename: "Typeface";
  foundries: TypefaceFoundries_foundries[] | null;
}
