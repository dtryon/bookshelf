import fetch from 'isomorphic-fetch';

import { BOOKS_LOADING, BOOKS_LOADED, BOOKS_FILTER_CHANGED } from "./types";


export const booksLoaded = (books) => {
    return {
        type: BOOKS_LOADED,
        books
    };
};

export const booksLoading = () => {
    return {
        type: BOOKS_LOADING
    }
};

export const filterBooks = filter => {
    return {
        type: BOOKS_FILTER_CHANGED,
        filter
    };
}

export const fetchBooks = () => {
    return async (dispatch) => {

        dispatch(booksLoading());

        const response = await fetch('/api/books');
        const body = await response.json();

        dispatch(booksLoaded(body.results));
    }
}
