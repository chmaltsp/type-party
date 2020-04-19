import * as React from 'react';

import styled, { media } from 'sc';

import { Query } from 'react-apollo';

import qs from 'qs';

import Pagination from '../../components/Pagination';

import { RouteComponentProps, withRouter } from 'react-router';
import { LoadingButton } from '../../components/Button';
import Card, { CardProps } from '../../components/Card';
import LinkList from '../../components/LinkList';
import {
  GetWebsites,
  GetWebsites_websites,
  GetWebsitesVariables,
} from './__generated__/GetWebsites';
import { GET_WEBSITES } from './queries';

const Button = styled(LoadingButton)`
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
    id: website.id,
    imgUrl:
      (website.images &&
        website.images &&
        website.images.thumbnail &&
        website.images.thumbnail.url) ||
      '',
    secondary: (
      <span>
        Fonts —{'  '}
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

export const WebsitePanel: React.SFC<RouteComponentProps<{}>> = props => {
  const {
    location: { search },
    history: { push },
  } = props;

  const { page } = qs.parse(search, {
    ignoreQueryPrefix: true,
  });
  const pageNum = page && parseInt(page, 10);
  return (
    <Query<GetWebsites, GetWebsitesVariables>
      notifyOnNetworkStatusChange={true}
      query={GET_WEBSITES}
      variables={{ skip: (pageNum && pageNum > 1 && pageNum * 6) || 0 }}
    >
      {({ data, loading, error, fetchMore }) => {
        const cards = selectCards((data && data.websites) || []);

        const total = data && data.websitesCount;
        console.log(pageNum);
        return (
          <Wrapper>
            <Grid>
              {cards.length > 0 &&
                cards.map(card => {
                  return <Card key={card.title} {...card} />;
                })}
            </Grid>
            <Pagination
              total={total || 0}
              currentPage={pageNum || 1}
              nextPage={newPage => {
                push({
                  pathname: '/',
                  search:
                    '?' + new URLSearchParams({ page: newPage.toString() }).toString(),
                });
                return fetchMore({
                  query: GET_WEBSITES,
                  updateQuery: (previousEntry, { fetchMoreResult }) => {
                    const newWebsites =
                      (fetchMoreResult && fetchMoreResult.websites) || [];

                    const newCount =
                      (fetchMoreResult && fetchMoreResult.websitesCount) || 0;
                    return { websites: [...newWebsites], websitesCount: newCount };
                  },
                  variables: {
                    skip: (newPage > 1 && newPage * 6) || 0,
                  },
                });
              }}
            />
          </Wrapper>
        );
      }}
    </Query>
  );
};

const WebsitePanelWithRouter = withRouter(WebsitePanel);
export default WebsitePanelWithRouter;
