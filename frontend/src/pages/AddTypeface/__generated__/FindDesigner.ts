/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FindDesigner
// ====================================================

export interface FindDesigner_findDesigners {
  __typename: "Designer";
  name: string;
  id: string;
  url: string;
}

export interface FindDesigner {
  findDesigners: FindDesigner_findDesigners[];
}

export interface FindDesignerVariables {
  search: string;
}
