/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: WebsiteImages
// ====================================================

export interface WebsiteImages_images_full {
  __typename: "File";
  url: string;
  id: string;
  filename: string;
}

export interface WebsiteImages_images_thumbnail {
  __typename: "File";
  url: string;
  id: string;
  filename: string;
}

export interface WebsiteImages_images {
  __typename: "Images";
  full: WebsiteImages_images_full | null;
  thumbnail: WebsiteImages_images_thumbnail | null;
}

export interface WebsiteImages {
  __typename: "Website";
  images: WebsiteImages_images | null;
}
