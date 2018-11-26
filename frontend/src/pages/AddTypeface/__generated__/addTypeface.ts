/* tslint:disable */
// This file was automatically generated and should not be edited.

import { TypefaceCreateInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: addTypeface
// ====================================================

export interface addTypeface_addTypeface {
  __typename: "Typeface";
  name: string;
}

export interface addTypeface {
  addTypeface: addTypeface_addTypeface | null;
}

export interface addTypefaceVariables {
  input?: TypefaceCreateInput | null;
}
