import { gql } from 'apollo-boost';

export const ADD_TYPEFACE = gql`
  mutation AddTypeface($input: TypefaceCreateInput) {
    addTypeface(input: $input) {
      name
      id
    }
  }
`;
