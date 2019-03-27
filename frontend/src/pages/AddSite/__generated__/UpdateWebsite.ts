/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { UpdateWebsiteInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateWebsite
// ====================================================

export interface UpdateWebsite_updateWebsite_tags {
  __typename: "Tag";
  id: string;
  name: string;
}

export interface UpdateWebsite_updateWebsite_typefaces {
  __typename: "Typeface";
  id: string;
  name: string;
  slug: string;
}

export interface UpdateWebsite_updateWebsite_images_full {
  __typename: "File";
  url: string;
  id: string;
  filename: string;
}

export interface UpdateWebsite_updateWebsite_images_thumbnail {
  __typename: "File";
  url: string;
  id: string;
  filename: string;
}

export interface UpdateWebsite_updateWebsite_images {
  __typename: "Images";
  full: UpdateWebsite_updateWebsite_images_full | null;
  thumbnail: UpdateWebsite_updateWebsite_images_thumbnail | null;
}

export interface UpdateWebsite_updateWebsite {
  __typename: "Website";
  id: string;
  slug: string | null;
  title: string;
  isPublished: boolean;
  url: string;
  tags: UpdateWebsite_updateWebsite_tags[] | null;
  typefaces: UpdateWebsite_updateWebsite_typefaces[] | null;
  images: UpdateWebsite_updateWebsite_images | null;
}

export interface UpdateWebsite {
  updateWebsite: UpdateWebsite_updateWebsite;
}

export interface UpdateWebsiteVariables {
  input: UpdateWebsiteInput;
}
