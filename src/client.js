import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
//import registerServiceWorker from './registerServiceWorker';

import App from './components/app';
import './main.scss';

//Store
import reducer from './components/reducers';
import { sagas } from "./components/sagas";

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware),
)
sagaMiddleware.run(sagas)
//const action = type => store.dispatch({type})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
//registerServiceWorker();
