import * as React from 'react';
import { Container } from '../../components/Container';
import PageTitle from '../../components/PageTitle';

import { RouteComponentProps } from 'react-router';

import Form from './Form';

// export interface AddTypefaceProps {}

class AddTypeface extends React.PureComponent<
  RouteComponentProps<{ slug: string }>,
  any
> {
  public render() {
    return (
      <Container>
        <PageTitle>Add Typeface</PageTitle>
        <Form slug={this.props.match.params.slug} />
      </Container>
    );
  }
}

export default AddTypeface;
