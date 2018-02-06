import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import BookList from './components/BookList';

export default class App extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired
    };

    render() {
        return (
            <Provider store={this.props.store}>
                <div className="App">
                    <header><h1 className="u-clr-eggplant">Bookshelf</h1></header>
                    <content>
                        <BookList />
                    </content>
                </div>
            </Provider>
        );
    }
}

