// @flow

import {
  API_PENDING,
  API_SUCCESS,
  API_ADD,
  API_UPDATE,
  API_DELETE,
  API_ERROR,
} from "./Types";

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
    case API_ADD:
      let newItems = state.finishDeliveries;
      newItems?.push(action.payload);
      return {
        ...state,
        finishDeliveries: newItems,
      };
    case API_DELETE:
      const items = state.finishDeliveries ?? [];
      const idx = items
        ?.filter(Boolean)
        .findIndex((t) => t.id === action.payload);
      if (idx > -1) {
        items.splice(idx, 1);
      }

      return {
        ...state,
        finishDeliveries: items,
        loading: false,
      };
    case API_UPDATE:
      const itemsUpdate = state.finishDeliveries ?? [];
      const idxUpdate = itemsUpdate
        ?.filter(Boolean)
        .findIndex((t) => t.id === action.payload.id);

      if (idxUpdate > -1) {
        itemsUpdate[idxUpdate] = action.payload;
      }

      return {
        ...state,
        finishDeliveries: itemsUpdate,
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
