/* tslint:disable */
// This file was automatically generated and should not be edited.

import { DesignerCreateInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: AddDesigner
// ====================================================

export interface AddDesigner_addDesigner {
  __typename: "Designer";
  name: string;
  url: string;
  id: string;
}

export interface AddDesigner {
  addDesigner: AddDesigner_addDesigner | null;
}

export interface AddDesignerVariables {
  input?: DesignerCreateInput | null;
}
