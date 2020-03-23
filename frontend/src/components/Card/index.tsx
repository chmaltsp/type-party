import styled from 'sc';

import * as React from 'react';

import LinkBase from '../Link';

import { em } from 'polished';

const Wrapper = styled.div``;

const Image = styled.img`
  background-color: ${({ theme }) => theme.colors.greyDDD};
  height: auto;
  max-width: 100%;
  vertical-align: middle;
`;

const Title = styled(LinkBase)`
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

export interface CardProps {
  title?: string;
  imgUrl?: string;
  slug?: string | null;
  secondary?: string | React.ReactNode;
  className?: string;
}

const Card: React.SFC<CardProps> = ({ title, imgUrl, slug, secondary, className }) => {
  return (
    <Wrapper className={className}>
      <LinkBase to={`/site/${slug}`}>
        <div>
          <Image src={imgUrl} alt={title + ' image'} />
        </div>
      </LinkBase>
      <ContentWrapper>
        <Title to={`/site/${slug}`}>{title}</Title>
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
