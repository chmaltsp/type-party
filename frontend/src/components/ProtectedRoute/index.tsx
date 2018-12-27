import * as React from 'react';
import { ChildDataProps, compose, graphql } from 'react-apollo';
import { Redirect, Route, RouteComponentProps } from 'react-router';
import { AuthStatus } from './__generated__/AuthStatus';
import { AUTH_STATUS } from './query';

interface ProtectedRouteProps extends RouteComponentProps<{}> {
  redirectTo?: string;
}
export type Props = ChildDataProps<ProtectedRouteProps, AuthStatus>;

class ProtectedRoute extends React.PureComponent<Props> {
  public render() {
    console.log('PROTECTED ROUTE', this.props);
    return this.props.data.auth && this.props.data.auth.loggedIn ? (
      <Route {...this.props} />
    ) : (
      <Redirect to={this.props.redirectTo || '/login'} />
    );
  }
}

export default graphql<any, AuthStatus, {}, Props>(AUTH_STATUS)(ProtectedRoute);
