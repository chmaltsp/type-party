import { mount, shallow } from 'enzyme';
import * as React from 'react';

import { ThemeProvider } from './index';

import theme from './theme';

export const shallowWithTheme = (tree: any) => {
  const context = shallow(<ThemeProvider theme={theme} />)
    .instance()
    // @ts-ignore
    .getChildContext();
  return shallow(tree, { context });
};

export const mountWithTheme = (tree: any) => {
  const context = shallow(<ThemeProvider theme={theme} />)
    .instance()
    // @ts-ignore
    .getChildContext();

  return mount(tree, {
    childContextTypes: ThemeProvider.childContextTypes, // Needed so child components receive the theme prop
    context,
  });
};
