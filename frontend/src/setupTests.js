import 'raf/polyfill';

import { configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import 'jest-styled-components';
