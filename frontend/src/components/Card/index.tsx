import styled from 'sc';

import * as React from 'react';

import LinkBase from '../Link';

import { em } from 'polished';

const Wrapper = styled.div``;

const Image = styled.img`
  background-color: ${({ theme }) => theme.colors.greyDDD};
  width: 100%;
  height: 419px;
`;

const Title = LinkBase.extend`
  font-size: ${em(18)};
  display: block;
  text-decoration: none;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing.md}px;
`;

const SecordaryWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xs}px;
`;

interface CardProps {
  title?: string;
  imgUrl?: string;
  slug?: string;
  secondary?: string | React.ReactNode;
}

const Card: React.SFC<CardProps> = ({ title, imgUrl, slug, secondary }) => {
  return (
    <Wrapper>
      <LinkBase to={`/${slug}`}>
        <Image src={imgUrl} />
      </LinkBase>
      <ContentWrapper>
        <Title to={`/${slug}`}>{title}</Title>
        {secondary && <SecordaryWrapper>{secondary}</SecordaryWrapper>}
      </ContentWrapper>
    </Wrapper>
  );
};

Card.defaultProps = {
  imgUrl: 'url',
  secondary: (
    <span>
      Fonts - <LinkBase to="/font">Sans Serif</LinkBase>
    </span>
  ),
  slug: 'my-slug',
  title: 'Website',
};

export default Card;
