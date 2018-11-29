/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FindTypeface
// ====================================================

export interface FindTypeface_findTypefaces {
  __typename: "Typeface";
  name: string;
  id: string;
  downloadUrl: string;
}

export interface FindTypeface {
  findTypefaces: FindTypeface_findTypefaces[];
}

export interface FindTypefaceVariables {
  search: string;
}
