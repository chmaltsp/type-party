import styled from 'sc';

export const ListWrapper = styled.ul`
  margin-top: 0;
  padding-left: 0;
`;

export interface ListItemProps {
  isActive?: boolean;
  value: string;
}
export const ListItem = styled.li<ListItemProps>`
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-top: 0;
  list-style: none;
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.xs}px;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.greyC4C : 'transparent'};
  &:last-child {
    border-radius: ${({ theme }) => theme.borderRadius};
  }
`;
