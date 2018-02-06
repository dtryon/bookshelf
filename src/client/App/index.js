import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import BookList from './components/BookList';

export default class App extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired
    };

    render() {
        return (
            <Provider store={this.props.store}>
                <BrowserRouter>
                    <div className="App">
                        <header><h1 className="u-clr-eggplant">Bookshelf</h1></header>
                        <content>
                            <Routes />
                        </content>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

