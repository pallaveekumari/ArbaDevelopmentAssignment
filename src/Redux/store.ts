import { reducer as AuthReducer } from "../Redux/AuthReducer/reducer";
import { reducer as AppReducer } from "../Redux/AppReducer/reducer";

import thunk from "redux-thunk";

import { legacy_createStore, applyMiddleware, combineReducers } from "redux";

export const store: any = legacy_createStore(
  combineReducers({ AuthReducer, AppReducer }),
  applyMiddleware(thunk)
);
