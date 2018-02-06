import { expect } from 'chai';
import sinon from 'sinon';
import proxyquire from 'proxyquire';

import { BOOKS_LOADED, BOOKS_LOADING } from './types';
import { booksLoaded, booksLoading } from './books';

describe('books actions', () => {

    let fetchBooks, fetch;

    beforeEach(() => {
        fetch = sinon.stub();

        fetchBooks = proxyquire.noCallThru().load('./books', {
            'isomorphic-fetch': fetch
        }).fetchBooks;
    });

    it('should create books loaded', () => {
        const action = booksLoaded('some books');
        expect(action.type).to.equal(BOOKS_LOADED);
        expect(action.books).to.equal('some books');
    });

    it('should create books loading', () => {
        const action = booksLoading();
        expect(action.type).to.equal(BOOKS_LOADING);
    });

    it('should fetch books', async () => {
        const dispatch = sinon.stub();
        const json = sinon.stub().resolves({ results: 'some results' });
        fetch.resolves({ json });

        await fetchBooks()(dispatch);

        expect(dispatch.args[0][0].type).to.equal(BOOKS_LOADING);
        expect(dispatch.args[1][0].type).to.equal(BOOKS_LOADED);
    });
});
