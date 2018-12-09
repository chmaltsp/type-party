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
