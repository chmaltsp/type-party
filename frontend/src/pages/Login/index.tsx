import * as React from 'react';
import { Container } from '../../components/Container';

import Form from './Form';

export default class LoginPage extends React.Component {
  public render() {
    return (
      <Container>
        <Form />
      </Container>
    );
  }
}
