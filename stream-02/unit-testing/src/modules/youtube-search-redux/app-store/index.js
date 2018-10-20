import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';

import {middlewares} from './middlewares';
import {rootReducer} from './store/root-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initStore = (reducer = rootReducer) => {
  if (!reducer) {
    throw new Error('root reducer is not passed');
  }

  const store = createStore(
    reducer,
    {},
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  return store;
};
