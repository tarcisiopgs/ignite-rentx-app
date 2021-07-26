import 'styled-components/native';

import { theme } from '../../styles';

declare module 'styled-components' {
  type CustomTheme = typeof theme;

  export interface DefaultTheme extends CustomTheme {}
}
