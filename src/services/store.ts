import {
  createStore,
  applyMiddleware,
  compose,
  Store,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './root-reducer';
import rootSaga from './root-saga';

import globalConfiguration from '../config';

const { STAGE } = globalConfiguration;

const sagaMiddleware = createSagaMiddleware();

const createStoreWithDevMiddleware = composeWithDevTools(
  compose(
    applyMiddleware(
      sagaMiddleware,
    ),
  ),
)(createStore);
const createProductionStore = compose(applyMiddleware(sagaMiddleware))(createStore);

const createStorageConfig = STAGE !== 'local'
  ? createProductionStore
  : createStoreWithDevMiddleware;

const configureStore = (): Store & { dispatch: unknown; } => {
  const store = createStorageConfig(rootReducer);
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
