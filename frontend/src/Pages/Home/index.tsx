import * as React from 'react';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_WEBSITES = gql`
  {
    websites {
      title
      url
      id
    }
  }
`;

interface Site {
  title: string;
  url: string;
}
class Home extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="Home">
        <Query query={GET_WEBSITES}>
          {({ data, loading, error }) => {
            console.log(data);

            return (
              !loading &&
              data.websites.map(({ title, url }: Site) => {
                return (
                  <div key={title}>
                    <h4>{title}</h4>
                    <p>{url}</p>
                  </div>
                );
              })
            );
          }}
        </Query>
      </div>
    );
  }
}

export default Home;
