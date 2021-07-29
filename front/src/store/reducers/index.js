import {
  appInitialState,
  reducer as app,
} from "./app";

export const initialState = {
  app: appInitialState,
};

const reducers = {
  app
};

export const combineReducers = (reducersObj) => {
  return (state, action) => {
    return Object.keys(reducersObj).reduce((nextState, key) => {
      nextState[key] = reducersObj[key](state[key], action);
      return nextState;
    }, {});
  };
};

export const reducer = combineReducers(reducers);
