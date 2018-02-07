import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { RanksHistory } from './RanksHistory';

describe('RanksHistory', () => {

    it('should render list of ranks history', () => {

        const ranksHistory = [
            {
                primary_isbn10: 'primary_isbn10',
                primary_isbn13: 'primary_isbn13',
                rank: 'rank1',
                display_name: 'display_name1',
                published_date: '2017-12-12',
                weeks_on_list: 3,
                asterisk: 1,
                dagger: 1
            },
            {
                primary_isbn10: 'primary_isbn10',
                primary_isbn13: 'primary_isbn13',
                rank: 'rank1',
                display_name: 'display_name1',
                published_date: '2017-12-12',
                weeks_on_list: 3,
                asterisk: 1,
                dagger: 1
            }
        ];

        const wrapper = shallow(<RanksHistory ranksHistory={ranksHistory} getBooks={sinon.stub()} />);

        expect(wrapper.find('li').length).to.equal(2);
    });
});

