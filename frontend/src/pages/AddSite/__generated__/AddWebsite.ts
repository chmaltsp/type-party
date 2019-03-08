/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { AddWebsiteInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: AddWebsite
// ====================================================

export interface AddWebsite_addWebsite {
  __typename: "Website";
  id: string;
  url: string;
  title: string;
}

export interface AddWebsite {
  addWebsite: AddWebsite_addWebsite;
}

export interface AddWebsiteVariables {
  input: AddWebsiteInput;
}
