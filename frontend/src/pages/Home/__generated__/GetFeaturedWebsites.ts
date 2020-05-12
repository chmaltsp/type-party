/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetFeaturedWebsites
// ====================================================

export interface GetFeaturedWebsites_websites_images_thumbnail {
  __typename: "File";
  createdAt: any;
  url: string;
}

export interface GetFeaturedWebsites_websites_images {
  __typename: "Images";
  thumbnail: GetFeaturedWebsites_websites_images_thumbnail | null;
}

export interface GetFeaturedWebsites_websites_typefaces {
  __typename: "Typeface";
  slug: string;
  name: string;
}

export interface GetFeaturedWebsites_websites {
  __typename: "Website";
  title: string;
  url: string;
  id: string;
  slug: string | null;
  images: GetFeaturedWebsites_websites_images | null;
  typefaces: GetFeaturedWebsites_websites_typefaces[] | null;
}

export interface GetFeaturedWebsites {
  websites: GetFeaturedWebsites_websites[];
}
