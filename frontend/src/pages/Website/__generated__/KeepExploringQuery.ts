/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: KeepExploringQuery
// ====================================================

export interface KeepExploringQuery_websites_images_thumbnail {
  __typename: "File";
  createdAt: any;
  url: string;
}

export interface KeepExploringQuery_websites_images {
  __typename: "Images";
  thumbnail: KeepExploringQuery_websites_images_thumbnail | null;
}

export interface KeepExploringQuery_websites_typefaces {
  __typename: "Typeface";
  slug: string;
  name: string;
}

export interface KeepExploringQuery_websites {
  __typename: "Website";
  title: string;
  slug: string | null;
  url: string;
  images: KeepExploringQuery_websites_images | null;
  typefaces: KeepExploringQuery_websites_typefaces[] | null;
}

export interface KeepExploringQuery {
  websites: KeepExploringQuery_websites[];
}

export interface KeepExploringQueryVariables {
  after?: string | null;
}
