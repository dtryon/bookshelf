import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchBooks } from '../../actions/books';
import getBookId from '../lib/getBookId';
import Spinner from './Spinner';

export class BookList extends Component {

    static propTypes = {
        books: PropTypes.array,
        loading: PropTypes.bool,
        getBooks: PropTypes.func
    };

    componentWillMount() {
        this.props.getBooks();
    }

    render() {
        const { books = [], loading } = this.props;

        return (
            <div>
                { loading && <Spinner /> }
                { !loading && <ul>
                    { books.map(book => {
                        return (
                            <li key={getBookId(book)}>
                                <h2>{ book.title }</h2>
                                <h3>{ book.author }</h3>
                                <p>{ book.description }</p>
                            </li>
                        );
                    }
                    )}
                </ul> }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        books: state.books.list,
        loading: state.books.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getBooks: () => dispatch(fetchBooks())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

