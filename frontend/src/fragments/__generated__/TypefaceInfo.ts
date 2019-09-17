/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: TypefaceInfo
// ====================================================

export interface TypefaceInfo_tags {
  __typename: "Tag";
  id: string;
  name: string;
}

export interface TypefaceInfo {
  __typename: "Typeface";
  id: string;
  slug: string;
  name: string;
  downloadUrl: string;
  description: string | null;
  tags: TypefaceInfo_tags[] | null;
}
