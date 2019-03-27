import { gql } from 'apollo-boost';
import { WebsiteFragments } from '../../fragments/website';

export const SEARCH_TYPEFACE = gql`
  query FindTypeface($search: String!) {
    findTypefaces(search: $search) {
      name
      id
      downloadUrl
    }
  }
`;

export const SEARCH_TAG = gql`
  query FindTag($search: String!) {
    findTags(search: $search) {
      name
      id
    }
  }
`;

export const EDIT_WEBISTE = gql`
  query EditWebsite($slug: String!) {
    website(slug: $slug) {
      ...WebsiteInfo
      ...WebsiteTypefaces
      ...WebsiteImages
    }
  }
  ${WebsiteFragments.fragments.info}
  ${WebsiteFragments.fragments.typefaces}
  ${WebsiteFragments.fragments.images}
`;
