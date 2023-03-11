import {reducer} from "../Redux/AuthReducer/reducer"

import thunk from "redux-thunk"

import {legacy_createStore,applyMiddleware} from "redux"

export const store=legacy_createStore(reducer,applyMiddleware(thunk))
