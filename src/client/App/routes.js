import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BookList from './components/BookList';
import RanksHistory from './components/RanksHistory';

export default () => (
    <Switch>
        <Route path="/:bookName" component={RanksHistory} />
        <Route path="*" component={BookList} />
    </Switch>
);

