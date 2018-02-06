import { BOOKS_LOADED, BOOKS_LOADING } from '../actions/types';

export default (state = { results: [] }, action = {}) => {
    switch(action.type) {
        case BOOKS_LOADED:
            return {
                ...state,
                list: action.books,
                loading: false
            };
        case BOOKS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
