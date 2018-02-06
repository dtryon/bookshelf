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
                <div>
                    <header></header>
                    <content>
                        <BookList />
                    </content>
                    <footer></footer>
                </div>
            </Provider>
        );
    }
}

