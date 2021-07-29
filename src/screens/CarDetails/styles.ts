import { getStatusBarHeight } from 'react-native-status-bar-height';
import { TextProps, ViewProps } from 'react-native';
import styled from 'styled-components/native';

import { responsive } from '../../utils';

interface HeaderProps extends ViewProps {
  topInset: number;
}

interface ContentHeaderValueProps extends TextProps {
  highlighted?: boolean;
}

interface FooterProps extends ViewProps {
  bottomInset: number;
}

export const Container = styled.View.attrs({})`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.light};
`;

export const Header = styled.View.attrs({})<HeaderProps>`
  padding: ${({ topInset }) => responsive.getFinalValue(32 + topInset)}px
    ${responsive.getFinalValue(24)}px 0;
`;

export const Content = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const ContentHeader = styled.View.attrs({})`
  margin: ${responsive.getFinalValue(36)}px 0 ${responsive.getFinalValue(12)}px
    0;
  padding: 0 ${responsive.getFinalValue(24)}px;
  justify-content: space-between;
  flex-direction: row;
`;

export const ContentHeaderBlock = styled.View.attrs({})``;

export const ContentHeaderLabel = styled.Text.attrs({})`
  font-family: ${({ theme }) => theme.fonts.secondary.medium};
  letter-spacing: ${responsive.getFinalValue(0.56)}px;
  line-height: ${responsive.getFinalValue(10.88)}px;
  color: ${({ theme }) => theme.colors.textDetails};
  font-size: ${responsive.getFinalValue(10)}px;
  margin: 0 0 ${responsive.getFinalValue(4)}px;
  text-transform: uppercase;
`;

export const ContentHeaderValue = styled.Text.attrs(
  {},
)<ContentHeaderValueProps>`
  font-family: ${({ theme }) => theme.fonts.secondary.medium};
  color: ${({ theme, highlighted }) =>
    highlighted ? theme.colors.primary : theme.colors.title};
  line-height: ${responsive.getFinalValue(27.2)}px;
  font-size: ${responsive.getFinalValue(25)}px;
`;

export const ContentBody = styled.View.attrs({})`
  padding: 0 ${responsive.getFinalValue(12)}px;
`;

export const CarDescription = styled.Text.attrs({})`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  line-height: ${responsive.getFinalValue(25)}px;
  font-size: ${responsive.getFinalValue(15)}px;
  margin: 0 ${responsive.getFinalValue(12)}px;
  color: ${({ theme }) => theme.colors.text};
  text-align: justify;
`;

export const CarAddons = styled.View.attrs({})`
  margin: 0 0 ${responsive.getFinalValue(20)}px;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Footer = styled.View.attrs({})<FooterProps>`
  background-color: ${({ theme }) => theme.colors.main};
  padding: ${responsive.getFinalValue(24)}px ${responsive.getFinalValue(24)}px
    ${({ bottomInset }) => responsive.getFinalValue(24 + bottomInset)}px;
`;
