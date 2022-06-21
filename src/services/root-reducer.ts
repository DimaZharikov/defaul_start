import { combineReducers } from 'redux';

import testReducer from './test/test.reducer';

export const rootReducer = combineReducers({
  test: testReducer,
});

type RootReducerType = typeof rootReducer;
export type RootStateType = ReturnType<RootReducerType>;
