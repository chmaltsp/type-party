import * as React from 'react';
import styled from 'sc';

import { Container } from '../../components/Container';
import Flex from '../../components/Flex';
import PageTitle from '../../components/PageTitle';

export interface WebsiteProps {}

const DetailWrapper = styled(Flex)`
  flex-direction: row;
`;

const Image = styled.img`
  flex: 1;
  width: 50%;
  min-height: 419px;
  background-color: ${({ theme }) => theme.colors.greyC4C};
`;

const WebisteInfo = styled(Flex)`
  flex: 1;
  padding: 0 ${({ theme }) => theme.spacing.md}px;
  width: 50%;
`;

const Title = styled.h1``;

export default class Website extends React.PureComponent<WebsiteProps, any> {
  public render() {
    return (
      <Container>
        <DetailWrapper>
          <Image src="" />
          <WebisteInfo>
            <PageTitle>Adam Ho</PageTitle>
          </WebisteInfo>
        </DetailWrapper>
      </Container>
    );
  }
}
