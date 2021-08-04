// @flow

import { API_PENDING, API_SUCCESS, API_ERROR } from "./Types";

const initialState = {
  loading: false,
  deliveries: [],
  error: "",
};

export type DeliveriesProp = Array<{|
  address: string,
  city: string,
  customer: string,
  id: string,
  latitude: string,
  longitude: string,
  zip: string,
|}>;

export type State = {|
  loading: boolean,
  deliveries: ?DeliveriesProp,
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
        deliveries: action.payload,
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
