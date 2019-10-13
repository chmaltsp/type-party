/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { UpdateTypefaceInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateTypeface
// ====================================================

export interface UpdateTypeface_updateTypeface_tags {
  __typename: "Tag";
  id: string;
  name: string;
}

export interface UpdateTypeface_updateTypeface_images_full {
  __typename: "File";
  url: string;
  id: string;
  filename: string;
}

export interface UpdateTypeface_updateTypeface_images_thumbnail {
  __typename: "File";
  url: string;
  id: string;
  filename: string;
}

export interface UpdateTypeface_updateTypeface_images {
  __typename: "Images";
  full: UpdateTypeface_updateTypeface_images_full | null;
  thumbnail: UpdateTypeface_updateTypeface_images_thumbnail | null;
}

export interface UpdateTypeface_updateTypeface_designers {
  __typename: "Designer";
  id: string;
  name: string;
  url: string;
}

export interface UpdateTypeface_updateTypeface_foundries {
  __typename: "Foundry";
  id: string;
  name: string;
  url: string;
}

export interface UpdateTypeface_updateTypeface {
  __typename: "Typeface";
  id: string;
  slug: string;
  name: string;
  downloadUrl: string;
  description: string | null;
  tags: UpdateTypeface_updateTypeface_tags[] | null;
  images: UpdateTypeface_updateTypeface_images | null;
  designers: UpdateTypeface_updateTypeface_designers[] | null;
  foundries: UpdateTypeface_updateTypeface_foundries[] | null;
}

export interface UpdateTypeface {
  updateTypeface: UpdateTypeface_updateTypeface | null;
}

export interface UpdateTypefaceVariables {
  input?: UpdateTypefaceInput | null;
}
