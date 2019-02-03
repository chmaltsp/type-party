import * as React from 'react';

import Text from '../../components/Text';

import { ChildDataProps, graphql } from 'react-apollo';
import { RouteComponentProps } from 'react-router';
import LinkList from '../../components/LinkList';
import Tag from '../../components/Tag';
import { MMMDDDYYYY } from '../../utils/dateFormat';
import { GetWebsite, GetWebsiteVariables } from './__generated__/GetWebsite';
import KeepExploring from './KeepExploring';
import { GET_WEBSITE } from './queries';
import {
  Button,
  Container,
  DetailWrapper,
  Image,
  Line,
  TagWrapper,
  Title,
  WebsiteInfo,
} from './styles';

interface Params {
  slug: string;
}
export type WebsiteProps = ChildDataProps<
  RouteComponentProps<Params>,
  GetWebsite,
  GetWebsiteVariables
>;

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
            <TagWrapper>
              <Tag rounded={true} white={true} name="My Tag" />
              <Tag rounded={true} white={true} name="My Tag" />
              <Tag rounded={true} white={true} name="My Tag" />
            </TagWrapper>
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
