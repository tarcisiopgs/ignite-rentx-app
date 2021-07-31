import AnimatedLottieView from 'lottie-react-native';
import styled from 'styled-components/native';

import { responsive } from '../../utils';

export const Container = styled.View.attrs({})`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Animation = styled(AnimatedLottieView).attrs({
  resizeMode: 'contain',
  autoPlay: true,
  loop: true,
})`
  height: ${responsive.getFinalValue(200)}px;
`;
