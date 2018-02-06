import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from './index';

describe('App', () => {
    it('should render', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains('hello')).to.be.true;
    });
});

