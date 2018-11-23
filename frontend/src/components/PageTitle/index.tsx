import { em } from 'polished';
import styled from 'sc';

const PageTitle = styled.h2`
  color: ${props => props.theme.colors.black};
  font-size: ${em(40)};
  text-align: left;
  font-weight: normal;
  margin: 0;
`;

export default PageTitle;
