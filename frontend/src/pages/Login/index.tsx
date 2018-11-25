import * as React from 'react';
import { Container } from '../../components/Container';

import Form from './Form';
export interface LoginPageProps {}

export interface LoginPageState {}

export default class LoginPage extends React.Component<LoginPageProps, LoginPageState> {
  constructor(props: LoginPageProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <Container>
        <Form />
      </Container>
    );
  }
}
