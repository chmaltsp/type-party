/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { AddWebsiteInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateWebsite
// ====================================================

export interface UpdateWebsite_updateWebsite {
  __typename: "Website";
  id: string;
  url: string;
  title: string;
}

export interface UpdateWebsite {
  updateWebsite: UpdateWebsite_updateWebsite;
}

export interface UpdateWebsiteVariables {
  input: AddWebsiteInput;
}
