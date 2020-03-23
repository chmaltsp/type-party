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

export const LeftSide = styled(Flex)`
  flex: 1;
  align-self: flex-start;
  ${media.tablet`
    width: 100%;
  `}
`;
export const Image = styled.img`
  border: 1px ${({ theme }) => theme.colors.black} solid;
  height: auto;
  max-width: 100%;
  background-color: ${({ theme }) => theme.colors.greyC4C};
`;

export const WebsiteInfo = styled(Flex)`
  flex: 1;
  padding: 0 ${({ theme }) => theme.spacing.xxl}px;
  flex-direction: column;
  ${media.tablet`
    width: 100%;
    padding-left: 0;
    margin-top: ${({ theme }: any) => theme.spacing.md}px;
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
