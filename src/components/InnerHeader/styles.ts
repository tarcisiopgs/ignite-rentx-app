import { BorderlessButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { ViewProps } from 'react-native';

import { responsive } from '../../utils';

interface ContainerProps extends ViewProps {
  topInset: number;
}

interface BackIconProps {
  type: 'light' | 'dark';
}

export const Container = styled.View.attrs({})<ContainerProps>`
  padding: ${({ topInset }) => responsive.getFinalValue(32 + topInset)}px
    ${responsive.getFinalValue(32)}px 0;
  justify-content: flex-start;
  flex-direction: row;
`;

export const BackIcon = styled(Feather).attrs({
  name: 'chevron-left',
})<BackIconProps>`
  font-size: ${responsive.getFinalValue(25)}px;
  color: ${({ type, theme }) =>
    type === 'light' ? theme.colors.light : theme.colors.text};
`;

export const BackButton = styled(BorderlessButton).attrs({})``;
