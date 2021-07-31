import { RectButton } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
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

export const MySchedulesButton = styled(
  Animated.createAnimatedComponent(RectButton),
).attrs({})`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${responsive.getFinalValue(30)}px;
  height: ${responsive.getFinalValue(60)}px;

  width: ${responsive.getFinalValue(60)}px;

  justify-content: center;
  align-items: center;
`;

export const MySchedulesButtonIcon = styled(Ionicons).attrs({
  name: 'car-sport',
})`
  font-size: ${responsive.getFinalValue(30)}px;
  color: ${({ theme }) => theme.colors.light};
`;

export const AnimatedView = styled(Animated.View).attrs({})`
  bottom: ${responsive.getFinalValue(13)}px;
  right: ${responsive.getFinalValue(22)}px;
  position: absolute;
`;
