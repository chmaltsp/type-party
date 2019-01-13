import { em } from 'polished';
import styled from 'sc';

const Text = styled.p`
  font-size: ${({ theme }) => em(theme.font.sizes.md)};
  font-weight: 400;
  margin: 0;
  margin-top: ${({ theme }) => theme.spacing.xs}px;
`;

export default Text;
