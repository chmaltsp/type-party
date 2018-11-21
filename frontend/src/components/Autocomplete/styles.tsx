import styled from 'sc';

export const ListWrapper = styled.ul`
  margin-top: 0;
  padding-left: 0;
`;

export interface ListItemProps {
  isActive?: boolean;
  isSelected?: boolean;
  value: string;
}
export const ListItem = styled.li<ListItemProps>`
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-top: 0;
  list-style: none;
  text-decoration: none;
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.greyC4C : theme.colors.black};
  padding: ${({ theme }) => theme.spacing.xs}px;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.greyC4C : 'transparent'};
  &:last-child {
    border-radius: ${({ theme }) => theme.borderRadius};
  }
`;

export const TagSpacer = styled.div`
  display: grid;
  grid-gap: 6;
  margin: 0 4px 4px;
  grid-auto-flow: column;
  align-items: center;
`;
