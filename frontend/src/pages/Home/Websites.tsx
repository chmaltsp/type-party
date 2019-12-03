import * as React from 'react';

import styled, { media } from 'sc';

import { Query } from 'react-apollo';

import ButtonBase from '../../components/Button';
import Card, { CardProps } from '../../components/Card';
import LinkList from '../../components/LinkList';
import { GetWebsites, GetWebsites_websites } from './__generated__/GetWebsites';
import { GET_WEBSITES } from './queries';

const Button = styled(ButtonBase)`
  margin-top: ${({ theme }) => theme.spacing.md}px;
  align-self: center;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px 20px;
  ${media.tablet`
     grid-template-columns: 1fr;
  `};
`;

const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg * 2}px;
  display: flex;
  flex-direction: column;
`;

// export interface WebsitePanelProps {
// }

const selectCards = (websites: GetWebsites_websites[]): CardProps[] => {
  return websites.map(website => ({
    imgUrl:
      (website.images &&
        website.images &&
        website.images.thumbnail &&
        website.images.thumbnail.url) ||
      '',
    secondary: (
      <span>
        Fonts --{'  '}
        <LinkList
          hrefPrefix="typeface"
          links={
            (website.typefaces &&
              website.typefaces.map(font => ({
                name: font.name,
                slug: font.slug,
              }))) ||
            []
          }
        />
      </span>
    ),
    slug: website.slug || '',
    title: website.title,
  }));
};

export const WebsitePanel: React.SFC<{}> = props => {
  return (
    <Query<GetWebsites> query={GET_WEBSITES}>
      {({ data, loading, error }) => {
        const cards = selectCards((data && data.websites) || []);
        return (
          <Wrapper>
            <Grid>
              {!loading &&
                cards.map(card => {
                  return <Card key={card.title} {...card} />;
                })}
            </Grid>
            <Button>Load More</Button>
          </Wrapper>
        );
      }}
    </Query>
  );
};

export default WebsitePanel;
