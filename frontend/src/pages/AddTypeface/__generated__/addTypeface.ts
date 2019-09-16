/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { AddTypefaceInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: AddTypeface
// ====================================================

export interface AddTypeface_addTypeface {
  __typename: "Typeface";
  name: string;
  id: string;
}

export interface AddTypeface {
  addTypeface: AddTypeface_addTypeface | null;
}

export interface AddTypefaceVariables {
  input?: AddTypefaceInput | null;
}
