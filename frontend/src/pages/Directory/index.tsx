import { em } from 'polished';
import * as React from 'react';
import { ChildDataProps, graphql } from 'react-apollo';
import styled from 'sc';
import { Container } from '../../components/Container';
import FlexBase from '../../components/Flex';
import PageTitle from '../../components/PageTitle';
import { GetTypefaces } from './__generated__/GetTypefaces';
import { GET_TYPEFACES } from './queries';

export interface DirectoryProps {}

const FontListWrapper = styled(FlexBase)`
  margin-top: ${({ theme }) => theme.spacing.xl}px;
`;

const FontListUL = styled.ul`
  padding: 0;
  display: grid;
  width: 100%;
  grid-template-rows: repeat(30, 1fr);
  grid-auto-flow: column;
`;

const Font = styled.li`
  list-style: none;
  font-size: ${em(18)};
  margin-top: ${({ theme }) => theme.spacing.sm}px;
`;

export class Directory extends React.PureComponent<
  ChildDataProps<DirectoryProps, GetTypefaces>,
  any
> {
  public render() {
    const fonts = this.props.data && this.props.data.typefaces;
    return (
      <Container>
        <PageTitle> Font Directory</PageTitle>
        <FontListWrapper>
          <FontListUL>
            {fonts &&
              fonts.map(font => <Font key={font.name + Math.random()}>{font.name}</Font>)}
          </FontListUL>
        </FontListWrapper>
      </Container>
    );
  }
}

export default graphql<any, GetTypefaces>(GET_TYPEFACES)(Directory);
