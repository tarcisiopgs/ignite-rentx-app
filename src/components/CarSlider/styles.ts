import { ViewProps } from 'react-native';
import styled from 'styled-components/native';

import { responsive } from '../../utils';

interface DotProps extends ViewProps {
  active?: boolean;
}

export const Container = styled.View.attrs({})``;

export const Dots = styled.View.attrs({})`
  align-self: flex-end;
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
  margin: ${responsive.getFinalValue(36)}px 0 0;
  justify-content: center;
  align-items: center;
`;

export const CarImage = styled.Image.attrs({ resizeMode: 'contain' })`
  height: ${responsive.getFinalValue(132)}px;
  width: ${responsive.getFinalValue(280)}px;
`;
