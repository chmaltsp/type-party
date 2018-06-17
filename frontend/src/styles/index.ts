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

export const withProps = <U>() => <P, T, O>(
  fn: styledComponents.ThemedStyledFunction<P, T, O>
) => fn as styledComponents.ThemedStyledFunction<P & U, T, O & U>;
