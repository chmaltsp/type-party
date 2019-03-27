/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: WebsiteTypefaces
// ====================================================

export interface WebsiteTypefaces_typefaces {
  __typename: "Typeface";
  id: string;
  name: string;
  slug: string;
}

export interface WebsiteTypefaces {
  __typename: "Website";
  typefaces: WebsiteTypefaces_typefaces[] | null;
}
