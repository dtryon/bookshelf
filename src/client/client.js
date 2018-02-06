import React from 'react';
import { render } from 'react-dom';

import configureStore from './store';
import './styles/main.scss';
import App from './App';


const store = configureStore();

render(<App store={store} />, document.getElementById('app'));
