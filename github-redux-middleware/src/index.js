import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {applyMiddleware, createStore} from "redux";
import reducer from './reducers';
import {Provider} from "react-redux";
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {getReposWatcher} from "./sagas/index";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware, createLogger()));

sagaMiddleware.run(getReposWatcher);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
