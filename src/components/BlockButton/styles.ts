import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import { responsive } from '../../utils';

interface ContainerProps extends RectButtonProps {
  type: 'attention' | 'success';
}

export const Container = styled(RectButton).attrs({})<ContainerProps>`
  background-color: ${({ theme, type }) =>
    type === 'attention' ? theme.colors.primary : theme.colors.secondary};
  padding: ${responsive.getFinalValue(19)}px;
`;

export const Title = styled.Text.attrs({})`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  line-height: ${responsive.getFinalValue(18.15)}px;
  font-size: ${responsive.getFinalValue(15)}px;
  color: ${({ theme }) => theme.colors.light};
  text-align: center;
`;
