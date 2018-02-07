import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from './index';

import configureStore from '../store';

describe('App', () => {
    it('should render', () => {
        const store = configureStore();
        const wrapper = shallow(<App store={store}/>);
        expect(wrapper.find('BrowserRouter').length).to.equal(1);
    });
});

