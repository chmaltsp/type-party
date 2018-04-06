import * as styledComponents from 'styled-components';

// tslint:disable-next-line
import { ThemedStyledComponentsModule } from 'styled-components';

import theme from './theme';

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<typeof theme>;

export { css, injectGlobal, keyframes, ThemeProvider };
export default styled;
