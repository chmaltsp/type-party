import { gql } from 'apollo-boost';

export const ADD_TYPEFACE = gql`
  mutation addTypeface($input: TypefaceCreateInput) {
    addTypeface(input: $input) {
      name
    }
  }
`;
