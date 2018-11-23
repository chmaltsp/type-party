import * as React from 'react';
import { Container } from '../../components/Container';
import PageTitle from '../../components/PageTitle';

import Form from './Form';

// export interface AddTypefaceProps {}

class AddTypeface extends React.PureComponent<{}, any> {
  public render() {
    return (
      <Container>
        <PageTitle>Add Typeface</PageTitle>
        <Form />
      </Container>
    );
  }
}

export default AddTypeface;
