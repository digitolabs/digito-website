import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {reducers} from './reducers';
import App from './components/App';
// import './styles/styles.css';
import './sass/main.css';
import './vanillajs/index';

const store = createStore(reducers, applyMiddleware(thunk));


ReactDom.render(
<Provider store={store}>
    <App/>
</Provider>
, document.querySelector('#root'));