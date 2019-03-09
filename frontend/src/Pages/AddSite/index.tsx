import * as React from 'react';

import styled from 'sc';

import { em } from 'polished';
import { RouteComponentProps } from 'react-router';
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

export const AddSite: React.SFC<RouteComponentProps<{ slug: string }>> = props => {
  return (
    <Container>
      <PageTitle>Add / Edit Website</PageTitle>
      <Form slug={props.match.params.slug} />
    </Container>
  );
};

export default AddSite;
