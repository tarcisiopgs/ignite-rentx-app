import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled from 'styled-components/native';

import LogoSvg from '../../assets/logo.svg';
import { responsive } from '../../utils';

export const Container = styled.View.attrs({})`
  padding: ${responsive.getFinalValue(28 + getStatusBarHeight())}px
    ${responsive.getFinalValue(24)}px ${responsive.getFinalValue(28)}px;
  background-color: ${({ theme }) => theme.colors.dark};
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const TotalVehiclesText = styled.Text.attrs({})`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  line-height: ${responsive.getFinalValue(18.5)}px;
  font-size: ${responsive.getFinalValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const LogoIcon = styled(LogoSvg).attrs({
  height: responsive.getFinalValue(12),
  width: responsive.getFinalValue(108),
})``;
