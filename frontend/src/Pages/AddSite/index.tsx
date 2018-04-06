import * as React from 'react';

import styled from 'sc';

const Container = styled.div`
  margin: 0 auto;
  width:
  max-width: 960px;
  background-color: ${props => props.theme.colors.white};
`;

const PageTitle = styled.h2`
  color: ${props => props.theme.colors.black};
`;
// export interface AddSiteProps {
// }

export const AddSite = () => {
  return (
    <Container>
      <PageTitle>Add Site Page</PageTitle>
    </Container>
  );
};

export default AddSite;
