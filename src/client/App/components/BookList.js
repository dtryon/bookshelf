import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchBooks } from '../../actions/books';
import getBookId from '../lib/getBookId';

export class BookList extends Component {

    static propTypes = {
        books: PropTypes.array,
        getBooks: PropTypes.func
    };

    componentWillMount() {
        this.props.getBooks();
    }

    render() {
        const { books = [] } = this.props;

        return (
            <ul>
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
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
        books: state.books.list
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getBooks: () => dispatch(fetchBooks())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

