/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: KeepExploringQuery
// ====================================================

export interface KeepExploringQuery_websites {
  __typename: "Website";
  title: string;
  slug: string | null;
  url: string;
}

export interface KeepExploringQuery {
  websites: KeepExploringQuery_websites[];
}
