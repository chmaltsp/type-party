/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: EditTypeface
// ====================================================

export interface EditTypeface_typeface_tags {
  __typename: "Tag";
  id: string;
  name: string;
}

export interface EditTypeface_typeface_images_full {
  __typename: "File";
  url: string;
  id: string;
  filename: string;
}

export interface EditTypeface_typeface_images_thumbnail {
  __typename: "File";
  url: string;
  id: string;
  filename: string;
}

export interface EditTypeface_typeface_images {
  __typename: "Images";
  full: EditTypeface_typeface_images_full | null;
  thumbnail: EditTypeface_typeface_images_thumbnail | null;
}

export interface EditTypeface_typeface_designers {
  __typename: "Designer";
  id: string;
  name: string;
}

export interface EditTypeface_typeface_foundries {
  __typename: "Foundry";
  id: string;
  name: string;
}

export interface EditTypeface_typeface {
  __typename: "Typeface";
  id: string;
  slug: string;
  name: string;
  downloadUrl: string;
  tags: EditTypeface_typeface_tags[] | null;
  images: EditTypeface_typeface_images | null;
  designers: EditTypeface_typeface_designers[] | null;
  foundries: EditTypeface_typeface_foundries[] | null;
}

export interface EditTypeface {
  typeface: EditTypeface_typeface;
}

export interface EditTypefaceVariables {
  slug: string;
}
