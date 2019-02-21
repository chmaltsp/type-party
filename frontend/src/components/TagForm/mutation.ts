import { gql } from 'apollo-boost';

export const ADD_TAG = gql`
  mutation AddTag($input: TagCreateInput) {
    addTag(input: $input) {
      id
      name
    }
  }
`;
