import * as React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  width:
  max-width: 960px;
  background-color: ${props => props.theme.colors.greyDDD};
`;

const PageTitle = styled.h2`
  color: ${props => props.theme.colors.white};
`;
// export interface AddSiteProps {
// }

export default class AddSite extends React.Component<{}, any> {
  public render() {
    console.log(this.props);
    return (
      <Container>
        <PageTitle>Add Site Page</PageTitle>
      </Container>
    );
  }
}
