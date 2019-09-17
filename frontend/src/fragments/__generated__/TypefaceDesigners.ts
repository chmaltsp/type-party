/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: TypefaceDesigners
// ====================================================

export interface TypefaceDesigners_designers {
  __typename: "Designer";
  id: string;
  name: string;
  url: string;
}

export interface TypefaceDesigners {
  __typename: "Typeface";
  designers: TypefaceDesigners_designers[] | null;
}
