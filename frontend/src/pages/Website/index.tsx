import * as React from 'react';
import styled from 'sc';

import { Container } from '../../components/Container';
import Flex from '../../components/Flex';
import PageTitle from '../../components/PageTitle';
import Text from '../../components/Text';

import { ChildDataProps, graphql } from 'react-apollo';
import { RouteComponentProps } from 'react-router';
import { ButtonA } from '../../components/Button';
import LinkList from '../../components/LinkList';
import { MMMDDDYYYY } from '../../utils/dateFormat';
import { GetWebsite, GetWebsiteVariables } from './__generated__/GetWebsite';
import KeepExploring from './KeepExploring';
import { GET_WEBSITE } from './queries';

interface Params {
  slug: string;
}
export type WebsiteProps = ChildDataProps<
  RouteComponentProps<Params>,
  GetWebsite,
  GetWebsiteVariables
>;

const DetailWrapper = styled(Flex)`
  flex-direction: row;
`;

const Image = styled.img`
  flex: 1;
  width: 50%;
  height: 419px;
  background-color: ${({ theme }) => theme.colors.greyC4C};
`;

const WebsiteInfo = styled(Flex)`
  flex: 1;
  padding: 0 ${({ theme }) => theme.spacing.md}px;
  width: 50%;
  flex-direction: column;
`;

const Title = styled(PageTitle)`
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`;

const Button = styled(ButtonA)`
  margin-top: ${({ theme }) => theme.spacing.lg}px;
  display: inline-block;
`;

const Line = styled.hr`
  width: 100%;
  color: ${({ theme }) => theme.colors.black};
  opacity: 0.2;
  margin-top: ${props => props.theme.baseSpacing * 12}px;
  margin-bottom: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export class Website extends React.PureComponent<WebsiteProps, any> {
  public render() {
    if (!this.props.data || !this.props.data.website) {
      return null;
    }

    let fullImageUrl;

    if (this.props.data.website.images && this.props.data.website.images.full) {
      fullImageUrl = this.props.data.website.images.full.url;
    }

    return (
      <Container>
        <DetailWrapper>
          <Image src={fullImageUrl || ''} />
          <WebsiteInfo>
            <Title>{this.props.data.website.title}</Title>
            <Text>Posted on -- {MMMDDDYYYY(this.props.data.website.createdAt)}</Text>
            <Text>
              Fonts used -- <LinkList links={this.props.data.website.typefaces || []} />
            </Text>
            <div>
              <Button href={this.props.data.website.url} black={true}>
                View Site
              </Button>
            </div>
          </WebsiteInfo>
        </DetailWrapper>
        <Line />
        <KeepExploring />
      </Container>
    );
  }
}

export default graphql<RouteComponentProps<Params>, GetWebsite, GetWebsiteVariables, any>(
  GET_WEBSITE,
  {
    options: props => {
      return {
        variables: {
          slug: props.match.params.slug,
        },
      };
    },
  }
)(Website);
