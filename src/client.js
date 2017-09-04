import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import registerServiceWorker from './registerServiceWorker';

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

const rootElement = document.getElementById('root');

const render = (Root) => {
  ReactDOM.render(
    (
      <Provider store={store}>
        <Root />
      </Provider>
    ),
    rootElement
  );
}

render(App);

if (module.hot) {
  module.hot.accept('./components/app', () => {
    var NextApp = require('./components/app').default;
    render(NextApp);
  });
}

registerServiceWorker();
