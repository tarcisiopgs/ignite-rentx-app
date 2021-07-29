import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather, AntDesign } from '@expo/vector-icons';
import { FlatList, ViewProps } from 'react-native';
import styled from 'styled-components/native';

import { responsive } from '../../utils';
import { ScheduleDTO } from '../../dtos';

interface HeaderProps extends ViewProps {
  topInset: number;
}

export const Container = styled.View.attrs({})`
  flex: 1;
`;

export const Content = styled.View.attrs({})`
  padding: ${responsive.getFinalValue(24)}px ${responsive.getFinalValue(16)}px;
  background-color: ${({ theme }) => theme.colors.main};
  flex: 1;
`;

export const Header = styled.View.attrs({})<HeaderProps>`
  padding: ${({ topInset }) => responsive.getFinalValue(36 + topInset)}px
    ${responsive.getFinalValue(24)}px ${responsive.getFinalValue(34)}px
    ${responsive.getFinalValue(24)}px;
  background-color: ${({ theme }) => theme.colors.dark};
`;

export const BackButton = styled(BorderlessButton).attrs({})``;

export const BackButtonIcon = styled(Feather).attrs({ name: 'chevron-left' })`
  margin: 0 0 0 ${responsive.getFinalValue(8)}px;
  font-size: ${responsive.getFinalValue(25)}px;
  color: ${({ theme }) => theme.colors.light};
`;

export const Title = styled.Text.attrs({})`
  font-family: ${({ theme }) => theme.fonts.secondary.regular};
  margin: ${responsive.getFinalValue(40)}px 0 0 0;
  line-height: ${responsive.getFinalValue(34)}px;
  font-size: ${responsive.getFinalValue(30)}px;
  color: ${({ theme }) => theme.colors.light};
`;

export const Subtitle = styled.Text.attrs({})`
  font-family: ${({ theme }) => theme.fonts.secondary.regular};
  margin: ${responsive.getFinalValue(18)}px 0 0 0;
  line-height: ${responsive.getFinalValue(34)}px;
  font-size: ${responsive.getFinalValue(15)}px;
  color: ${({ theme }) => theme.colors.light};
`;

export const ListHeader = styled.View.attrs({})`
  margin: 0 0 ${responsive.getFinalValue(29)}px 0;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const ListHeaderTitle = styled.Text.attrs({})`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  line-height: ${responsive.getFinalValue(18.15)}px;
  font-size: ${responsive.getFinalValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ListHeaderDetail = styled.Text.attrs({})`
  font-family: ${({ theme }) => theme.fonts.secondary.medium};
  line-height: ${responsive.getFinalValue(16.32)}px;
  font-size: ${responsive.getFinalValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const ScheduleList = styled(
  FlatList as new () => FlatList<ScheduleDTO>,
).attrs({
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
})``;

export const CardWrapper = styled.View.attrs({})``;

export const SchedulePeriod = styled.View.attrs({})`
  margin: ${responsive.getFinalValue(2)}px 0 ${responsive.getFinalValue(16)}px 0;
  padding: ${responsive.getFinalValue(14)}px ${responsive.getFinalValue(24)}px;
  background-color: ${({ theme }) => theme.colors.light};
  flex-direction: row;
  align-items: center;
`;

export const SchedulePeriodText = styled.Text.attrs({})`
  font-family: ${({ theme }) => theme.fonts.secondary.medium};
  letter-spacing: ${responsive.getFinalValue(0.56)}px;
  color: ${({ theme }) => theme.colors.textDetails};
  line-height: ${responsive.getFinalValue(10.88)}px;
  font-size: ${responsive.getFinalValue(10)}px;
  text-transform: uppercase;
  flex: 1;
`;

export const SchedulePeriodDate = styled.Text.attrs({})`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  line-height: ${responsive.getFinalValue(15.73)}px;
  font-size: ${responsive.getFinalValue(13)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const SchedulePeriodArrow = styled(AntDesign).attrs({
  name: 'arrowright',
})`
  color: ${({ theme }) => theme.colors.textDetails};
  font-size: ${responsive.getFinalValue(14)}px;
  margin: 0 ${responsive.getFinalValue(10)}px;
`;
