/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FindTag
// ====================================================

export interface FindTag_findTags {
  __typename: "Tag";
  name: string;
  id: string;
}

export interface FindTag {
  findTags: FindTag_findTags[];
}

export interface FindTagVariables {
  search: string;
}
