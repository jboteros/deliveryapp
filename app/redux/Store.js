// @flow

import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { Reducer as deliveriesReducer } from "./Deliveries/Reducer";
import { Reducer as finishDeliveriesReducer } from "./FinishDeliveries/Reducer";

const appReducers = combineReducers({
  deliveriesReducer,
  finishDeliveriesReducer,
});

const rootReducer = (state, action) => appReducers(state, action);

const logger = createLogger();

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
