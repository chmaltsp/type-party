/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: TypefaceImages
// ====================================================

export interface TypefaceImages_images_full {
  __typename: "File";
  url: string;
  id: string;
  filename: string;
}

export interface TypefaceImages_images_thumbnail {
  __typename: "File";
  url: string;
  id: string;
  filename: string;
}

export interface TypefaceImages_images {
  __typename: "Images";
  full: TypefaceImages_images_full | null;
  thumbnail: TypefaceImages_images_thumbnail | null;
}

export interface TypefaceImages {
  __typename: "Typeface";
  images: TypefaceImages_images | null;
}
