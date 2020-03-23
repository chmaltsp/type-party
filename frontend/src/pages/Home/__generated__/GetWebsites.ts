/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetWebsites
// ====================================================

export interface GetWebsites_websites_images_thumbnail {
  __typename: "File";
  createdAt: any;
  url: string;
}

export interface GetWebsites_websites_images {
  __typename: "Images";
  thumbnail: GetWebsites_websites_images_thumbnail | null;
}

export interface GetWebsites_websites_typefaces {
  __typename: "Typeface";
  slug: string;
  name: string;
}

export interface GetWebsites_websites {
  __typename: "Website";
  title: string;
  url: string;
  id: string;
  slug: string | null;
  images: GetWebsites_websites_images | null;
  typefaces: GetWebsites_websites_typefaces[] | null;
}

export interface GetWebsites {
  websites: GetWebsites_websites[];
}

export interface GetWebsitesVariables {
  cursor?: string | null;
}
