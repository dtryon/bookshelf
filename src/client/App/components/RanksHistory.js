import React, { Component } from 'react';
import { connect } from 'react-redux';

import getBookId from '../lib/getBookId';
import { fetchBooks } from '../../actions/books';

export class RanksHistory extends Component {

    componentWillMount() {
        this.props.getBooks();
    }

    render() {
        const { ranksHistory = [], book = {} } = this.props;

        return (
            <div className="RanksHistory">
                <h2 className="u-clr-eggplant">Rank History</h2>
                <h3 className="u-clr-grape">{ book.title }</h3>
                <ul>
                    { ranksHistory.map(rh => {

                        const {
                            primary_isbn10,
                            primary_isbn13,
                            rank,
                            display_name,
                            published_date,
                            weeks_on_list
                        } = rh;

                        return (
                            <li className="u-bg-shell" key={primary_isbn10 + primary_isbn13}>
                                { !!display_name && <h3>{ display_name }</h3> }
                                { !!published_date && <div className="date">Published: { published_date }</div> }
                                { !!primary_isbn10 && <div className="isbn">ISBN10: { primary_isbn10 }</div> }
                                { !!primary_isbn13 && <div className="isbn">ISBN13: { primary_isbn13 }</div> }
                                { !!rank && <div className="rank">Rank: { rank }</div> }
                                { !!weeks_on_list && <div className="weeks">Weeks on list: { weeks_on_list }</div> }
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps)  => {
    const { books: { list = [] } = {} } = state;
    const { bookId } = ownProps.match.params;
    const filteredBooks = list.filter(book => getBookId(book) === bookId);
    const [ selectedBook = {} ] = filteredBooks;
    const { ranks_history = [] } = selectedBook;

    return {
        bookId,
        book: selectedBook,
        ranksHistory: ranks_history
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getBooks: () => dispatch(fetchBooks())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RanksHistory);
