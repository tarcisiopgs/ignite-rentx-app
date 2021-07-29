import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { responsive } from '../../utils';
import { CarDTO } from '../../dtos';

export const Container = styled.View.attrs({})`
  background-color: ${({ theme }) => theme.colors.main};
  flex: 1;
`;

export const Content = styled.View.attrs({})`
  background-color: ${({ theme }) => theme.colors.main};
  flex: 1;
`;

export const CarList = styled(FlatList as new () => FlatList<CarDTO>).attrs({
  contentContainerStyle: { padding: responsive.getFinalValue(16) },
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const MySchedulesButton = styled(RectButton).attrs({})`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${responsive.getFinalValue(30)}px;
  height: ${responsive.getFinalValue(60)}px;
  bottom: ${responsive.getFinalValue(13)}px;
  width: ${responsive.getFinalValue(60)}px;
  right: ${responsive.getFinalValue(22)}px;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

export const MySchedulesButtonIcon = styled(Ionicons).attrs({
  name: 'car-sport',
})`
  font-size: ${responsive.getFinalValue(30)}px;
  color: ${({ theme }) => theme.colors.light};
`;
