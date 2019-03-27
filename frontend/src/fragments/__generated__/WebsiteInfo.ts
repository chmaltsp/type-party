/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: WebsiteInfo
// ====================================================

export interface WebsiteInfo_tags {
  __typename: "Tag";
  id: string;
  name: string;
}

export interface WebsiteInfo {
  __typename: "Website";
  id: string;
  slug: string | null;
  title: string;
  isPublished: boolean;
  url: string;
  tags: WebsiteInfo_tags[] | null;
}
