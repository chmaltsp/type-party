import styled from 'sc';

interface FlexProps {
  flexDirection?: 'row' | 'column';
}
const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
`;

export default Flex;
