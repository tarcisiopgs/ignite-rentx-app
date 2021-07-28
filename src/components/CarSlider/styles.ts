import { BorderlessButton } from 'react-native-gesture-handler';
import { Dimensions, ViewProps } from 'react-native';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import { responsive } from '../../utils';

const { width } = Dimensions.get('window');

interface DotProps extends ViewProps {
  active?: boolean;
}

export const Container = styled.View.attrs({})`
  margin: 0 0 ${responsive.getFinalValue(36)}px;
`;

export const Dots = styled.View.attrs({})`
  flex-direction: row;
  align-items: center;
`;

export const Dot = styled.View.attrs({})<DotProps>`
  background-color: ${({ theme, active }) =>
    active ? theme.colors.activeDot : theme.colors.inactiveDot};
  border-radius: ${responsive.getFinalValue(3)}px;
  margin: 0 ${responsive.getFinalValue(8)}px 0 0;
  height: ${responsive.getFinalValue(6)}px;
  width: ${responsive.getFinalValue(6)}px;
`;

export const CarImageWrapper = styled.View.attrs({})`
  width: ${width - responsive.getFinalValue(48)}px;
  height: ${responsive.getFinalValue(132)}px;
  justify-content: center;
  align-items: center;
`;

export const CarImage = styled.Image.attrs({ resizeMode: 'contain' })`
  height: ${responsive.getFinalValue(132)}px;
  width: ${responsive.getFinalValue(280)}px;
`;

export const DotsWrapper = styled.View.attrs({})`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const BackIcon = styled(Feather).attrs({
  name: 'chevron-left',
})`
  font-size: ${responsive.getFinalValue(25)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const BackButton = styled(BorderlessButton).attrs({})``;
