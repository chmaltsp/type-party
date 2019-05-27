import gql from 'graphql-tag';

export const ADD_TYPEFACE = gql`
  mutation AddTypeface($input: TypefaceCreateInput) {
    addTypeface(input: $input) {
      name
      id
    }
  }
`;
