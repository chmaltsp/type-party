import * as React from 'react';

import styled from 'sc';
import Flex from '../Flex';

interface PaginationProps {
  currentPage: number;
  total: number;
  nextPage: (newPage: number) => void;
}

const PageNumber = styled.button<{ selected: boolean }>`
  border-radius: 50%;
  border: 1px ${({ theme, selected }) => (selected ? theme.colors.black : 'transparent')}
    solid;
  width: 48px;
  height: 48px;
  line-height: 48px;
  margin-right: ${({ theme }) => theme.spacing.sm}px;
  text-align: center;
  font-size: ${props => props.theme.font.sizes.md};
  cursor: pointer;
`;

const Button = styled.button.attrs({
  type: 'button',
})`
  color: ${({ theme }) => theme.colors.black};
  background: none;
  border: 0;
  cursor: pointer;
  text-decoration: underline;
  padding-right: ${({ theme }) => theme.spacing.sm}px;
`;

const Previous = styled(Button)``;
const Next = styled(Button)`
  padding-right: 0;
`;
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

  const maxNumbers = total < 6 ? total : 6;
  for (let i = 0; i < maxNumbers; i++) {
    components.push(i + startPage);
  }

  return (
    <Wrapper>
      {currentPage !== 1 && (
        <Previous onClick={() => nextPage(currentPage - 1)}>Previous</Previous>
      )}
      {components.map(num => (
        <PageNumber
          key={`pagination-${num}`}
          onClick={() => nextPage(num)}
          selected={currentPage === num}
        >
          {num}
        </PageNumber>
      ))}
      {currentPage !== total && (
        <>
          <Last onClick={() => nextPage(total)}>Last</Last>
          <Next onClick={() => nextPage(currentPage + 1)}>Next</Next>
        </>
      )}
    </Wrapper>
  );
};

export default Pagination;
