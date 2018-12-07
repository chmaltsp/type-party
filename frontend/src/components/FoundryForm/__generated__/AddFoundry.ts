/* tslint:disable */
// This file was automatically generated and should not be edited.

import { FoundryCreateInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: AddFoundry
// ====================================================

export interface AddFoundry_addFoundry {
  __typename: "Foundry";
  name: string;
  id: string;
  url: string;
}

export interface AddFoundry {
  addFoundry: AddFoundry_addFoundry | null;
}

export interface AddFoundryVariables {
  input?: FoundryCreateInput | null;
}
