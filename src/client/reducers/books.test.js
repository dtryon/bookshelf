import { expect } from 'chai';

import * as actions from '../actions/books';

import reducer from './books';

describe('books reducer', () => {


    it('BOOKS_LOADED', () => {
        const initialState = reducer();
        const action = actions.booksLoaded('books');
        const state = reducer(initialState, action);
        expect(state.list).to.equal('books');
    });

    it('BOOKS_LOADED should not be loading', () => {
        const initialState = reducer();
        const action = actions.booksLoading();
        const loadingState = reducer(initialState, action);
        expect(loadingState.loading).to.be.true;
        const loadedAction = actions.booksLoaded('books');
        const state = reducer(loadingState, loadedAction)
        expect(state.loading).to.be.false;
    });

});
