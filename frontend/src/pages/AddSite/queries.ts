import gql from 'graphql-tag';
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
