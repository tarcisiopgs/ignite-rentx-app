import { BorderlessButton } from 'react-native-gesture-handler';
import { Calendar } from 'react-native-calendars';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { ViewProps } from 'react-native';

import ArrowSvg from '../../assets/arrow.svg';
import { responsive } from '../../utils';

interface PeriodContentProps extends ViewProps {
  topInset: number;
}

interface PeriodValueBlockProps extends ViewProps {
  selected?: boolean;
}

interface FooterProps extends ViewProps {
  bottomInset: number;
}

export const Container = styled.View.attrs({})`
  flex: 1;
`;

export const PeriodContent = styled.View.attrs({})<PeriodContentProps>`
  padding: ${({ topInset }) => responsive.getFinalValue(32 + topInset)}px
    ${responsive.getFinalValue(24)}px ${responsive.getFinalValue(32)}px;
  background-color: ${({ theme }) => theme.colors.dark};
`;

export const PeriodTitle = styled.Text.attrs({})`
  font-family: ${({ theme }) => theme.fonts.secondary.semiBold};
  line-height: ${responsive.getFinalValue(34)}px;
  margin: 0 0 ${responsive.getFinalValue(32)}px;
  font-size: ${responsive.getFinalValue(30)}px;
  color: ${({ theme }) => theme.colors.light};
`;

export const PeriodValues = styled.View.attrs({})`
  flex-direction: row;
  align-items: center;
`;

export const PeriodValueArrowRight = styled(ArrowSvg).attrs({})`
  margin: 0 ${responsive.getFinalValue(35)}px;
`;

export const PeriodValueBlock = styled.View.attrs({})<PeriodValueBlockProps>`
  border-bottom-color: ${({ theme, selected }) =>
    selected ? 'transparent' : theme.colors.primaryLight};
  border-bottom-width: ${responsive.getFinalValue(1)}px;
  flex: 1;
`;

export const PeriodValueLabel = styled.Text.attrs({})`
  font-family: ${({ theme }) => theme.fonts.secondary.medium};
  letter-spacing: ${responsive.getFinalValue(0.56)}px;
  line-height: ${responsive.getFinalValue(10.88)}px;
  margin: 0 0 ${responsive.getFinalValue(9)}px;
  font-size: ${responsive.getFinalValue(10)}px;
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
`;

export const PeriodValueSelected = styled.Text.attrs({})`
  font-family: ${({ theme }) => theme.fonts.secondary.medium};
  letter-spacing: ${responsive.getFinalValue(0.56)}px;
  line-height: ${responsive.getFinalValue(18.15)}px;
  font-size: ${responsive.getFinalValue(15)}px;
  color: ${({ theme }) => theme.colors.light};
  text-transform: uppercase;
`;

export const Footer = styled.View.attrs({})<FooterProps>`
  padding: ${responsive.getFinalValue(24)}px ${responsive.getFinalValue(24)}px
    ${({ bottomInset }) => responsive.getFinalValue(24 + bottomInset)}px;
`;

export const CalendarContent = styled.ScrollView.attrs({
  contentContainerStyle: { padding: responsive.getFinalValue(10) },
})`
  background-color: ${({ theme }) => theme.colors.light};
  flex: 1;
`;

export const BackContent = styled.View.attrs({})`
  margin: 0 0 ${responsive.getFinalValue(40)}px;
  justify-content: flex-start;
  flex-direction: row;
`;

export const BackIcon = styled(Feather).attrs({
  name: 'chevron-left',
})`
  font-size: ${responsive.getFinalValue(25)}px;
  color: ${({ theme }) => theme.colors.light};
`;

export const BackButton = styled(BorderlessButton).attrs({})``;

export const PeriodCalendar = styled(Calendar).attrs(({ theme }) => ({
  headerStyle: {
    borderBottomWidth: responsive.getFinalValue(1),
    borderBottomColor: theme.colors.secondaryText,
    paddingBottom: responsive.getFinalValue(10),
    marginBottom: responsive.getFinalValue(10),
    backgroundColor: theme.colors.light,
  },
  theme: {
    arrowStyle: { marginHorizontal: responsive.getFinalValue(-15) },
    textDayHeaderFontSize: responsive.getFinalValue(10),
    textDayHeaderFontFamily: theme.fonts.primary.medium,
    textMonthFontFamily: theme.fonts.secondary.semiBold,
    textMonthFontSize: responsive.getFinalValue(20),
    textDayFontFamily: theme.fonts.primary.regular,
    monthTextColor: theme.colors.title,
  },
  minDate: new Date(),
  firstDay: 1,
}))``;

export const PeriodCalendarArrowLeft = styled(Feather).attrs({
  name: 'chevron-left',
})`
  font-size: ${responsive.getFinalValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const PeriodCalendarArrowRight = styled(Feather).attrs({
  name: 'chevron-right',
})`
  font-size: ${responsive.getFinalValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
`;
