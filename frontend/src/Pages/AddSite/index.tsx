import * as React from 'react';

import styled from 'sc';

import Form from './Form';

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  background-color: ${props => props.theme.colors.black};
  padding: ${props => props.theme.baseSpacing * 2}px;
`;

const PageTitle = styled.h2`
  color: ${props => props.theme.colors.white};
  text-align: center;
  margin: 0;
`;
// export interface AddSiteProps {
// }

export const AddSite = () => {
  return (
    <Container>
      <PageTitle>Add Site Page</PageTitle>
      <Form />
    </Container>
  );
};

export default AddSite;
