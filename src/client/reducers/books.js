import {
  BOOKS_LOADED,
  BOOKS_LOADING,
  BOOKS_FILTER_CHANGED
} from "../actions/types";

export default (state = { results: [] }, action = {}) => {
    switch(action.type) {
        case BOOKS_LOADED:
            return {
                ...state,
                list: action.books,
                loading: false,
                filter: ''
            };
        case BOOKS_LOADING:
            return {
                ...state,
                loading: true
            };
        case BOOKS_FILTER_CHANGED:
            return {
                ...state,
                filter: action.filter
            };
        default:
            return state;
    }
}
