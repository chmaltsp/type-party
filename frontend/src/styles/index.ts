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

export const withProps = <U>() => <P, T, O>(
  fn: styledComponents.ThemedStyledFunction<P, T, O>
) => fn as styledComponents.ThemedStyledFunction<P & U, T, O & U>;
