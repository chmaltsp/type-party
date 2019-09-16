/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: EditWebsite
// ====================================================

export interface EditWebsite_typeface_tags {
  __typename: "Tag";
  id: string;
  name: string;
}

export interface EditWebsite_typeface_images_full {
  __typename: "File";
  url: string;
  id: string;
  filename: string;
}

export interface EditWebsite_typeface_images_thumbnail {
  __typename: "File";
  url: string;
  id: string;
  filename: string;
}

export interface EditWebsite_typeface_images {
  __typename: "Images";
  full: EditWebsite_typeface_images_full | null;
  thumbnail: EditWebsite_typeface_images_thumbnail | null;
}

export interface EditWebsite_typeface_designers {
  __typename: "Designer";
  id: string;
  name: string;
}

export interface EditWebsite_typeface_foundries {
  __typename: "Foundry";
  id: string;
  name: string;
}

export interface EditWebsite_typeface {
  __typename: "Typeface";
  id: string;
  slug: string;
  name: string;
  downloadUrl: string;
  tags: EditWebsite_typeface_tags[] | null;
  images: EditWebsite_typeface_images | null;
  designers: EditWebsite_typeface_designers[] | null;
  foundries: EditWebsite_typeface_foundries[] | null;
}

export interface EditWebsite {
  typeface: EditWebsite_typeface;
}

export interface EditWebsiteVariables {
  slug: string;
}
