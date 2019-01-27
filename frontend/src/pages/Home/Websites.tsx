import * as React from 'react';

import styled, { media } from 'sc';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import ButtonBase from '../../components/Button';
import Card from '../../components/Card';
import { GetWebsites } from './__generated__/GetWebsites';

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

interface Site {
  title: string;
  url: string;
  id: string;
}

export const GET_WEBSITES = gql`
  query GetWebsites {
    websites {
      title
      url
      id
      slug
    }
  }
`;

// export interface WebsitePanelProps {
// }

export const WebsitePanel: React.SFC<{}> = props => {
  return (
    <Query<GetWebsites> query={GET_WEBSITES}>
      {({ data, loading, error }) => {
        console.log(data);
        return (
          <Wrapper>
            <Grid>
              {!loading &&
                data &&
                data.websites &&
                data.websites.map(({ title, url, id, slug }) => {
                  return (
                    <Card key={title + id} title={title} slug={slug || ''} imgUrl={url} />
                  );
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
