/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { TagCreateInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: AddTag
// ====================================================

export interface AddTag_addTag {
  __typename: "Tag";
  id: string;
  name: string;
}

export interface AddTag {
  addTag: AddTag_addTag | null;
}

export interface AddTagVariables {
  input?: TagCreateInput | null;
}
