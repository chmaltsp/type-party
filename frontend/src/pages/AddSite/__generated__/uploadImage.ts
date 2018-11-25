/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: uploadImage
// ====================================================

export interface uploadImage_uploadImage {
  __typename: "File";
  id: string;
  url: string;
  filename: string;
}

export interface uploadImage {
  uploadImage: uploadImage_uploadImage | null;
}

export interface uploadImageVariables {
  file: any;
}
