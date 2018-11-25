/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetWebsites
// ====================================================

export interface GetWebsites_websites {
  __typename: "Website";
  title: string;
  url: string;
  id: string;
}

export interface GetWebsites {
  websites: GetWebsites_websites[];
}
