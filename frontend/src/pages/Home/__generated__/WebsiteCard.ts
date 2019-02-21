/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: WebsiteCard
// ====================================================

export interface WebsiteCard_images_thumbnail {
  __typename: "File";
  createdAt: any;
  url: string;
}

export interface WebsiteCard_images {
  __typename: "Images";
  thumbnail: WebsiteCard_images_thumbnail | null;
}

export interface WebsiteCard_typefaces {
  __typename: "Typeface";
  slug: string;
  name: string;
}

export interface WebsiteCard {
  __typename: "Website";
  title: string;
  url: string;
  id: string;
  slug: string | null;
  images: WebsiteCard_images | null;
  typefaces: WebsiteCard_typefaces[] | null;
}
