/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetTypeface
// ====================================================

export interface GetTypeface_typeface_tags {
  __typename: "Tag";
  id: string;
  name: string;
}

export interface GetTypeface_typeface_images_full {
  __typename: "File";
  url: string;
  id: string;
  filename: string;
}

export interface GetTypeface_typeface_images_thumbnail {
  __typename: "File";
  url: string;
  id: string;
  filename: string;
}

export interface GetTypeface_typeface_images {
  __typename: "Images";
  full: GetTypeface_typeface_images_full | null;
  thumbnail: GetTypeface_typeface_images_thumbnail | null;
}

export interface GetTypeface_typeface_designers {
  __typename: "Designer";
  id: string;
  name: string;
  url: string;
}

export interface GetTypeface_typeface_foundries {
  __typename: "Foundry";
  id: string;
  name: string;
  url: string;
}

export interface GetTypeface_typeface {
  __typename: "Typeface";
  id: string;
  slug: string;
  name: string;
  downloadUrl: string;
  description: string | null;
  tags: GetTypeface_typeface_tags[] | null;
  images: GetTypeface_typeface_images | null;
  designers: GetTypeface_typeface_designers[] | null;
  foundries: GetTypeface_typeface_foundries[] | null;
}

export interface GetTypeface {
  typeface: GetTypeface_typeface;
}

export interface GetTypefaceVariables {
  slug: string;
}
