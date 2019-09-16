import gql from 'graphql-tag';

export const ADD_TYPEFACE = gql`
  mutation AddTypeface($input: AddTypefaceInput) {
    addTypeface(input: $input) {
      name
      id
    }
  }
`;
