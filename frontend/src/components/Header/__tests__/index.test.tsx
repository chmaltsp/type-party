import * as React from 'react';

import Header, { HeaderState } from '../';

import { shallow } from 'enzyme';

describe('<Header />', () => {
  const component = shallow<{}, HeaderState>(<Header />);
  it('should render without blowing up', () => {
    expect(component).toMatchSnapshot();
  });

  it('should open and close the mobile menu', () => {
    const instance = component.instance();
    // @ts-ignore
    instance.handleMenuToggle();

    expect((instance.state as any).mobileOpen).toEqual(true);
    // @ts-ignore
    instance.handleMenuToggle();

    expect((instance.state as any).mobileOpen).toEqual(false);
  });
});
