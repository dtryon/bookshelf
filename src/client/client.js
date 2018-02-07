/* global INITIAL_STATE */
import React from 'react';
import { hydrate } from 'react-dom';

import configureStore from './store';
import './styles/main.scss';
import App from './App';


const store = configureStore(INITIAL_STATE || {});

hydrate(<App store={store} />, document.getElementById('app'));
