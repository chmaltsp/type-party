import gql from 'graphql-tag';

export const ADD_TAG = gql`
  mutation AddTag($input: TagCreateInput) {
    addTag(input: $input) {
      id
      name
    }
  }
`;
