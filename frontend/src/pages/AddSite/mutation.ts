import { gql } from 'apollo-boost';

export const UPLOAD_IMAGE = gql`
  mutation uploadImage($file: Upload!) {
    uploadImage(file: $file) {
      id
      url
      filename
    }
  }
`;

export const ADD_WEBSITE = gql`
  mutation AddWebsite($input: AddWebsiteInput!) {
    addWebsite(input: $input) {
      id
      url
      title
    }
  }
`;

export const UPDATE_WEBSITE = gql`
  mutation UpdateWebsite($input: AddWebsiteInput!) {
    updateWebsite(input: $input) {
      id
      url
      title
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
    }
  }
`;
