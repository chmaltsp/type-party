import * as React from 'react';

import styled from 'sc';
import Flex from '../Flex';

interface PaginationProps {
  currentPage: number;
  total: number;
  nextPage: (newPage: number) => void;
}

const PageNumber = styled.div<{ selected: boolean }>`
  border-radius: 50%;
  border: 1px ${({ theme, selected }) => (selected ? theme.colors.black : 'transparent')}
    solid;
  width: 48px;
  height: 48px;
  line-height: 48px;
  margin-right: ${({ theme }) => theme.spacing.md}px;
  text-align: center;
  font-size: ${props => props.theme.font.sizes.md};
`;

const Button = styled.button.attrs({
  type: 'button',
})`
  color: ${({ theme }) => theme.colors.black};
  background: none;
  border: 0;
  cursor: pointer;
`;

const Next = styled(Button)``;
const Last = styled(Button)``;

const Wrapper = styled(Flex)`
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg}px 0;
`;
const Pagination: React.FunctionComponent<PaginationProps> = ({
  currentPage,
  total = 10,
  nextPage,
}) => {
  const components = [];

  const startPage = currentPage <= 3 ? 1 : currentPage - 3;

  for (let i = 0; i < 6; i++) {
    components.push(i + startPage);
  }

  return (
    <Wrapper>
      {components.map(num => (
        <PageNumber
          key={`pagination-${num}`}
          onClick={() => nextPage(num)}
          selected={currentPage === num}
        >
          {num}
        </PageNumber>
      ))}
      <Next>Next</Next>
      <Last>Last</Last>
    </Wrapper>
  );
};

export default Pagination;
