import * as React from 'react';

import styled from 'sc';
import { Image, Title } from '../Website/styles';

import { ButtonA } from '../../components/Button';
import { Container } from '../../components/Container';
import Flex from '../../components/Flex';
import Link from '../../components/Link';
import Text from '../../components/Text';

export interface TypefaceProps {}

export const DetailWrapper = styled(Flex)`
  flex-direction: row;
`;

export const TypefaceInfo = styled(Flex)`
  flex: 1;
  padding: 0 ${({ theme }) => theme.spacing.md}px;
  width: 50%;
  flex-direction: column;
`;

export const Description = styled(Text)`
  margin: ${({ theme }) => theme.spacing.md}px 0;
`;

export const ButtonContainer = styled(Flex)`
  margin: ${({ theme }) => theme.spacing.lg}px 0;
`;
export default class Typeface extends React.PureComponent<TypefaceProps> {
  public render() {
    return (
      <Container>
        <DetailWrapper>
          <Image src={''} />
          <TypefaceInfo>
            <Title>Lato</Title>
            <Text>
              Designer: <Link to={`placeholder`}> Lucas</Link>
            </Text>
            <Text>
              Lisence: <Link to={`placeholder`}> MIT</Link>
            </Text>
            <Description>
              Sporting Grotesque is an open-source sans-serif typeface designed by Lucas
              Le Bihan in 2016. The design features wide proportions, tight counters and
              wonky, off-kilter letterforms. The family is available in two
              weights—regular and bold—but doesn’t include italics.
            </Description>
            <ButtonContainer>
              <ButtonA black={true}>Get typeface</ButtonA>
            </ButtonContainer>
          </TypefaceInfo>
        </DetailWrapper>
      </Container>
    );
  }
}
