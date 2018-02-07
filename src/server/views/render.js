import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';

import configureStore from '../../client/store';
import Routes from '../../client/App/routes';
import { booksLoaded } from '../../client/actions/books';

const render = (url, bookList) => {

    const store = configureStore();
    store.dispatch(booksLoaded(bookList.results));

    const state = store.getState();

    const compMarkup = ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter location={url} context={{}}>
                <Routes />
            </StaticRouter>
        </Provider>
    );

    return `<html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
        <link type="text/css" href="/assets/styles.css" rel="stylesheet" />
        </head>
        <body>
            <header><h1 class="u-clr-eggplant">Bookshelf</h1></header>
            <div id="app">${compMarkup}</div>
        </body>
        <script>var INITIAL_STATE = ${JSON.stringify(state)}</script>
        <script type="text/javascript" src="/assets/bundle.js" charset="utf-8"></script>
    </html>`;
};

export default render;
