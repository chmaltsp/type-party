import { gql } from 'apollo-boost';

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
      id
      slug
      title
      isPublished
      url
      tags {
        id
        name
      }
      images {
        full {
          url
          id
          filename
        }
        thumbnail {
          url
          id
          filename
        }
      }
      typefaces {
        id
        name
        slug
      }
    }
  }
`;
