import * as React from 'react';

import styled from 'sc';

import { em } from 'polished';
import Form from './Form';

const Container = styled.div`
  margin: 0 auto;
  padding: ${props => props.theme.baseSpacing * 11}px;
`;

const PageTitle = styled.h2`
  color: ${props => props.theme.colors.black};
  font-size: ${em(40)};
  text-align: left;
  font-weight: normal;
  margin: 0;
`;
// export interface AddSiteProps {
// }

export const AddSite = () => {
  return (
    <Container>
      <PageTitle>Add / Edit Website</PageTitle>
      <Form />
    </Container>
  );
};

export default AddSite;
