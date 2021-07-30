import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

import BrandSvg from '../../assets/brand.svg';
import LogoSvg from '../../assets/logo.svg';
import { responsive } from '../../utils';

export const Container = styled.View.attrs({})`
  background-color: ${({ theme }) => theme.colors.dark};
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const BrandIcon = styled(BrandSvg).attrs({
  height: responsive.getFinalValue(50),
  width: responsive.getFinalValue(80),
})``;

export const LogoIcon = styled(LogoSvg).attrs({
  height: responsive.getFinalValue(20),
  width: responsive.getFinalValue(180),
})``;

export const AnimatedView = styled(Animated.View).attrs({})`
  position: absolute;
`;
