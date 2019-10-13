import styled, { media } from 'sc';
import { ButtonA } from '../../components/Button';
import { Container as ContainerBase } from '../../components/Container';
import Flex from '../../components/Flex';
import PageTitle from '../../components/PageTitle';
export const DetailWrapper = styled(Flex)`
  flex-direction: row;
  ${media.tablet`
    flex-direction: column;
    margin: ${({ theme }: any) => theme.spacing.md}px 0;
  `}
`;
export const Image = styled.img`
  flex: 1;
  width: 50%;
  height: 419px;
  background-color: ${({ theme }) => theme.colors.greyC4C};
  ${media.tablet`
    width: 100%;
  `};
`;

export const WebsiteInfo = styled(Flex)`
  flex: 1;
  padding: 0 ${({ theme }) => theme.spacing.md}px;
  width: 50%;
  flex-direction: column;
  ${media.tablet`
    width: 100%;
  `};
`;
export const Title = styled(PageTitle)`
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`;
export const Button = styled(ButtonA)`
  margin-top: ${({ theme }) => theme.spacing.lg}px;
  display: inline-block;
`;
export const Line = styled.hr`
  width: 100%;
  color: ${({ theme }) => theme.colors.black};
  opacity: 0.2;
  margin-top: ${props => props.theme.baseSpacing * 12}px;
  margin-bottom: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const Container = styled(ContainerBase)`
  margin-bottom: ${props => props.theme.baseSpacing * 15}px;
`;
export const TagWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md}px;
  display: flex;
  flex-wrap: wrap;
  > div {
    margin-right: ${({ theme }) => theme.spacing.sm}px;
    margin-top: ${({ theme }) => theme.spacing.sm}px;
  }
`;
