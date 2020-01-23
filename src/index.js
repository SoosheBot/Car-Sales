import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers/index';

import 'bulma/css/bulma.css';
import './styles.scss';

//Step 1 -- import Provider and createStore, add to rootElement
// Step 2 -- wrap App in Provider
// Step 3 -- create a store function to pass into Provider
// Step 4 -- once you've created the necessary reducers, prop them into Provider after setting them equal to const store, below.

const store = createStore(rootReducer);
console.log('store state is', store.getState());

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
