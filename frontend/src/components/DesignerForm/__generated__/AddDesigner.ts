/* tslint:disable */
// This file was automatically generated and should not be edited.

import { DesignerCreateInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: AddDesigner
// ====================================================

export interface AddDesigner_addDesigner_addedBy {
  __typename: "User";
  email: string;
}

export interface AddDesigner_addDesigner {
  __typename: "Designer";
  name: string;
  url: string;
  addedBy: AddDesigner_addDesigner_addedBy;
}

export interface AddDesigner {
  addDesigner: AddDesigner_addDesigner | null;
}

export interface AddDesignerVariables {
  input?: DesignerCreateInput | null;
}
