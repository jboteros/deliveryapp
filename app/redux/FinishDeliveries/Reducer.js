// @flow

import { API_PENDING, API_SUCCESS, API_ERROR } from "./Types";

const initialState = {
  loading: false,
  finishDeliveries: [],
  error: "",
};

export type FinishDeliveriesProp = Array<{|
  status: string,
  latitude: string,
  longitude: string,
  deliveryId: string,
  id: string,
|}>;

export type State = {|
  loading: boolean,
  finishDeliveries: ?FinishDeliveriesProp,
  error: string,
|};

type Action = any;

export const Reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case API_PENDING:
      return {
        ...state,
        loading: true,
      };
    case API_SUCCESS:
      return {
        ...state,
        finishDeliveries: action.payload,
        loading: false,
      };
    case API_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
