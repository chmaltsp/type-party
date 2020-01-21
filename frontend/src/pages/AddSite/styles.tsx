import { Form as FormBase } from 'formik';
import styled from 'sc';
import ButtonBase, { LoadingButton } from '../../components/Button';
import Flex from '../../components/Flex';

export const LeftColumn = styled(Flex)`
  flex: 1;
  max-width: 469px;
  flex-direction: column;
`;
export const AddTypefaceButton = styled(ButtonBase)`
  /* width: 200px; */
`;
export const RightColumn = styled(Flex)`
  margin-left: ${({ theme }) => theme.baseSpacing * 13 + 'px'};
  max-width: 569px;
  flex-direction: column;
  flex: 1;
`;
export const Form = styled(FormBase)`
  margin: ${props => props.theme.baseSpacing * 2}px auto;
  display: flex;
  flex-direction: row;
  width: 100%;
`;
export const SubmitButton = styled(LoadingButton)`
  /* background-color: transparent; */
  border: 2px ${({ theme }) => theme.colors.black} solid;
  margin: ${({ theme }) => theme.baseSpacing * 2}px 0;
  border-radius: ${({ theme }) => theme.baseSpacing / 2}px;
  height: 64px;
  /* color: ${({ theme }) => theme.colors.black}; */
  cursor: pointer;
  /* padding: ${({ theme }) => theme.baseSpacing}px ${({ theme }) =>
  theme.baseSpacing * 2}px; */
`;
