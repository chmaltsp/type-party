import * as styledComponents from 'styled-components';
import { media } from './media';

// tslint:disable-next-line
import { ThemedStyledComponentsModule } from 'styled-components';

import { shallowWithTheme } from './test-util';
import theme from './theme';

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<typeof theme>;

export { css, injectGlobal, keyframes, ThemeProvider, media, shallowWithTheme };
export default styled;
