import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchBooks, filterBooks } from '../../actions/books';
import getBookId from '../lib/getBookId';
import Spinner from './Spinner';

export class BookList extends Component {

    static propTypes = {
        books: PropTypes.array,
        loading: PropTypes.bool,
        getBooks: PropTypes.func,
        filter: PropTypes.string,
        changeFilter: PropTypes.func
    };

    componentDidMount() {
        console.log('node again?');
        this.props.getBooks();
    }

    render() {
        const { books = [], loading, filter = '', changeFilter } = this.props;

        const filteredBooks = filter.length
            ? books.filter(book => {
                const { author = '' } = book;
                return author.toLowerCase().includes(filter);
            })
            : books;

        return (
            <div className="BookList">
                { loading && <Spinner /> }
                { !loading && <div>
                    <div>
                        <input
                            placeholder="filter by author"
                            name="books-filter"
                            value={filter}
                            onChange={e => changeFilter(e.target.value)}
                        />
                    </div>
                    <ul>
                        { filteredBooks.map(book => {
                            return (
                                <li key={getBookId(book)}>
                                    <h2 className="u-clr-grape"><Link to={`/${getBookId(book)}`}>{ book.title }</Link></h2>
                                    <h3 className="u-clr-eggplant">{ book.author }</h3>
                                    <p className="u-clr-grey5">{ book.description }</p>
                                </li>
                            );
                        }
                        )}
                    </ul>
                </div>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        books: state.books.list,
        loading: state.books.loading,
        filter: state.books.filter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getBooks: () => dispatch(fetchBooks()),
        changeFilter: filter => dispatch(filterBooks(filter))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

