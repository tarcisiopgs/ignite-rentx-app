import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled from 'styled-components/native';

import { responsive } from '../../utils';

export const Container = styled.View.attrs({})`
  flex: 1;
`;

export const Header = styled.View.attrs({})`
  padding: ${responsive.getFinalValue(28 + getStatusBarHeight())}px
    ${responsive.getFinalValue(24)}px 0;
`;
