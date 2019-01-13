import { Link as LinkBase } from 'react-router-dom';
import styled from 'sc';

export const Link = styled(LinkBase)`
  color: ${({ theme }) => theme.colors.black};
`;

export default Link;
