import { TextProps, ViewProps } from 'react-native';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

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

export const Content = styled.ScrollView.attrs({})`
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

export const CarAddons = styled.View.attrs({})`
  margin: 0 0 ${responsive.getFinalValue(40)}px;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Footer = styled.View.attrs({})<FooterProps>`
  background-color: ${({ theme }) => theme.colors.main};
  padding: ${responsive.getFinalValue(24)}px ${responsive.getFinalValue(24)}px
    ${({ bottomInset }) => responsive.getFinalValue(24 + bottomInset)}px;
`;

export const ScheduleDetailsContent = styled.View.attrs({})`
  border-bottom-color: ${({ theme }) => theme.colors.secondaryText};
  border-bottom-width: ${responsive.getFinalValue(1)}px;
  padding: 0 0 ${responsive.getFinalValue(16)}px;
  margin: 0 ${responsive.getFinalValue(12)}px;
  flex-direction: row;
  align-items: center;
`;

export const ScheduleDetailsIcon = styled(Feather).attrs({
  name: 'calendar',
})`
  background-color: ${({ theme }) => theme.colors.primary};
  margin: 0 ${responsive.getFinalValue(29)}px 0 0;
  font-size: ${responsive.getFinalValue(20)}px;
  color: ${({ theme }) => theme.colors.light};
  padding: ${responsive.getFinalValue(14)}px;
`;

export const ScheduleDetailsBlock = styled.View.attrs({})``;

export const ScheduleDetailsLabel = styled.Text.attrs({})`
  font-family: ${({ theme }) => theme.fonts.secondary.medium};
  color: ${({ theme }) => theme.colors.secondaryTextDetails};
  letter-spacing: ${responsive.getFinalValue(0.56)}px;
  line-height: ${responsive.getFinalValue(10.88)}px;
  margin: 0 0 ${responsive.getFinalValue(8)}px;
  font-size: ${responsive.getFinalValue(10)}px;
  text-transform: uppercase;
`;

export const ScheduleDetailsValue = styled.Text.attrs({})`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  line-height: ${responsive.getFinalValue(18.15)}px;
  font-size: ${responsive.getFinalValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const ScheduleDetailsSecondContent = styled.View.attrs({})`
  padding: ${responsive.getFinalValue(16)}px ${responsive.getFinalValue(12)}px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const ScheduleTotal = styled.Text.attrs({})`
  font-family: ${({ theme }) => theme.fonts.secondary.medium};
  line-height: ${responsive.getFinalValue(26.11)}px;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${responsive.getFinalValue(24)}px;
`;

export const ScheduleDetailsSeparate = styled(Feather).attrs({
  name: 'chevron-right',
})`
  color: ${({ theme }) => theme.colors.textDetails};
  font-size: ${responsive.getFinalValue(20)}px;
  margin: 0 ${responsive.getFinalValue(22)}px;
`;
