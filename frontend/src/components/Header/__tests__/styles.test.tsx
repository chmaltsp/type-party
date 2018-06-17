import * as React from 'react';

import { Link, Logo, MenuLink, NavlinksWrapper, Star, Wrapper } from '../styles';

import { shallowWithTheme } from 'sc';

describe('<Link', () => {
  it('should render properly', () => {
    expect(shallowWithTheme(<Link to="/non-route" />)).toMatchSnapshot();
  });
});

describe('<Logo', () => {
  it('should render properly', () => {
    expect(shallowWithTheme(<Logo />)).toMatchSnapshot();
  });
});

describe('<MenuLink', () => {
  it('should render properly', () => {
    expect(shallowWithTheme(<MenuLink />)).toMatchSnapshot();
  });
});

describe('<NavlinksWrapper', () => {
  it('should render properly', () => {
    expect(shallowWithTheme(<NavlinksWrapper />)).toMatchSnapshot();
  });
});

describe('<Star', () => {
  it('should render properly', () => {
    expect(shallowWithTheme(<Star />)).toMatchSnapshot();
  });
});

describe('<Wrapper', () => {
  it('should render properly', () => {
    expect(shallowWithTheme(<Wrapper />)).toMatchSnapshot();
  });
});
