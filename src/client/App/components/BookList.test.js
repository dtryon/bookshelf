import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { BookList } from './BookList';

describe('BookList', () => {

    it('should render a list of books', () => {

        const books = [
            {
                title: 'title1',
                author: 'author1',
                desription: 'desc1'
            },
            {
                title: 'title2',
                author: 'author2',
                desription: 'desc2'
            }
        ];

        const wrapper = shallow(<BookList books={books} getBooks={sinon.stub()} />);

        expect(wrapper.find('li').length).to.equal(2);
    });
});
