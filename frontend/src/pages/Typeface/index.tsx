import * as React from 'react';

import styled, { media } from 'sc';
import { Image, Title } from '../Website/styles';

import { ChildDataProps, graphql } from 'react-apollo';
import { RouteComponentProps } from 'react-router';
import { ButtonA } from '../../components/Button';
import { Container } from '../../components/Container';
import Flex from '../../components/Flex';
import Link from '../../components/Link';
import Text from '../../components/Text';
import { GetTypeface, GetTypefaceVariables } from './__generated__/GetTypeface';
import { AList } from './AList';
import { GET_TYPEFACE } from './queries';

interface Params {
  slug: string;
}

export type TypefaceProps = ChildDataProps<
  RouteComponentProps<Params>,
  GetTypeface,
  GetTypefaceVariables
>;

export const DetailWrapper = styled(Flex)`
  flex-direction: row;
  ${media.tablet`
    flex-direction: column;
    margin: ${({ theme }: any) => theme.spacing.md}px 0;
  `}
`;

export const TypefaceInfo = styled(Flex)`
  flex: 1;
  padding: 0 ${({ theme }) => theme.spacing.md}px;
  width: 50%;
  flex-direction: column;
  ${media.tablet`
    width: 100%;
    padding-left: 0;
    margin-top: ${({ theme }: any) => theme.spacing.md}px;
  `};
`;

export const Description = styled(Text)`
  margin: ${({ theme }) => theme.spacing.md}px 0;
`;

export const ButtonContainer = styled(Flex)`
  margin: ${({ theme }) => theme.spacing.lg}px 0;
`;

export class Typeface extends React.PureComponent<TypefaceProps> {
  public render() {
    if (!this.props.data || !this.props.data.typeface) {
      return null;
    }

    const loggedIn =
      this.props.data && this.props.data.auth && this.props.data.auth.loggedIn;
    let fullImageUrl;

    if (this.props.data.typeface.images && this.props.data.typeface.images.full) {
      fullImageUrl = this.props.data.typeface.images.full.url;
    }
    return (
      <Container>
        <DetailWrapper>
          <Image src={fullImageUrl} />
          <TypefaceInfo>
            <Title>{this.props.data.typeface.name}</Title>
            {loggedIn && (
              <>
                {' '}
                --{' '}
                <Link to={`/add-typeface/${this.props.data.typeface.slug}`}> Edit</Link>
              </>
            )}
            {this.props.data.typeface.designers && (
              <Text>
                Designer:
                {this.props.data.typeface.designers && (
                  <AList list={this.props.data.typeface.designers || []} />
                )}
              </Text>
            )}
            {this.props.data.typeface.foundries && (
              <Text>
                Foundries:
                {this.props.data.typeface.foundries && (
                  <AList list={this.props.data.typeface.foundries || []} />
                )}
              </Text>
            )}
            <Description>{this.props.data.typeface.description}</Description>
            <ButtonContainer>
              <ButtonA href={this.props.data.typeface.downloadUrl} black={true}>
                Get typeface
              </ButtonA>
            </ButtonContainer>
          </TypefaceInfo>
        </DetailWrapper>
      </Container>
    );
  }
}
export default graphql<
  RouteComponentProps<Params>,
  GetTypeface,
  GetTypefaceVariables,
  any
>(GET_TYPEFACE, {
  options: props => {
    return {
      variables: {
        slug: props.match.params.slug,
      },
    };
  },
})(Typeface);
