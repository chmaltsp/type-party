/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: EditWebsite
// ====================================================

export interface EditWebsite_website_tags {
  __typename: "Tag";
  id: string;
  name: string;
}

export interface EditWebsite_website_typefaces {
  __typename: "Typeface";
  id: string;
  name: string;
  slug: string;
}

export interface EditWebsite_website_images_full {
  __typename: "File";
  url: string;
  id: string;
  filename: string;
}

export interface EditWebsite_website_images_thumbnail {
  __typename: "File";
  url: string;
  id: string;
  filename: string;
}

export interface EditWebsite_website_images {
  __typename: "Images";
  full: EditWebsite_website_images_full | null;
  thumbnail: EditWebsite_website_images_thumbnail | null;
}

export interface EditWebsite_website {
  __typename: "Website";
  id: string;
  slug: string | null;
  title: string;
  isPublished: boolean;
  url: string;
  tags: EditWebsite_website_tags[] | null;
  featured: boolean;
  typefaces: EditWebsite_website_typefaces[] | null;
  images: EditWebsite_website_images | null;
}

export interface EditWebsite {
  website: EditWebsite_website;
}

export interface EditWebsiteVariables {
  slug: string;
}
