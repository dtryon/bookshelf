import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BookList from './components/BookList';

export default () => (
    <Switch>
        <Route path="/:bookName" component={BookList} />
        <Route path="*" component={BookList} />
    </Switch>
);

