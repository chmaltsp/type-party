import styled from 'sc';

import { em } from 'polished';
const Button = styled.button`
  padding: ${({ theme }) => theme.spacing.sm}px ${({ theme }) => theme.spacing.md}px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  font-size: ${em(18)};
  font-weight: 400;
`;

export default Button;
