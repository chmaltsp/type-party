/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetWebsite
// ====================================================

export interface GetWebsite_website_typefaces {
  __typename: "Typeface";
  name: string;
  slug: string;
}

export interface GetWebsite_website_images_full {
  __typename: "File";
  createdAt: any;
  url: string;
}

export interface GetWebsite_website_images {
  __typename: "Images";
  full: GetWebsite_website_images_full | null;
}

export interface GetWebsite_website_tags {
  __typename: "Tag";
  name: string;
  id: string;
}

export interface GetWebsite_website {
  __typename: "Website";
  slug: string | null;
  title: string;
  url: string;
  createdAt: any;
  typefaces: GetWebsite_website_typefaces[] | null;
  images: GetWebsite_website_images | null;
  tags: GetWebsite_website_tags[] | null;
}

export interface GetWebsite {
  website: GetWebsite_website;
}

export interface GetWebsiteVariables {
  slug: string;
}
