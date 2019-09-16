/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetTypeface
// ====================================================

export interface GetTypeface_typeface_tags {
  __typename: "Tag";
  name: string;
  id: string;
}

export interface GetTypeface_typeface {
  __typename: "Typeface";
  name: string;
  slug: string;
  description: string | null;
  downloadUrl: string;
  tags: GetTypeface_typeface_tags[] | null;
}

export interface GetTypeface {
  typeface: GetTypeface_typeface;
}

export interface GetTypefaceVariables {
  slug: string;
}
