/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FindFoundry
// ====================================================

export interface FindFoundry_findFoundries {
  __typename: "Foundry";
  name: string;
  id: string;
  url: string;
}

export interface FindFoundry {
  findFoundries: FindFoundry_findFoundries[];
}

export interface FindFoundryVariables {
  search: string;
}
