import axios from "axios";
import { Dispatch } from "redux";
import { fetchData, fetchSuccess, fetchError } from "./Actions";

export const DeliveriesActionCreator =
  (url: string) => (dispatch: Dispatch) => {
    dispatch(fetchData());
    return new Promise((): Promise<?Response> => {
      axios
        .get(url)
        .then((response) => {
          dispatch(fetchSuccess(response.data));
        })
        .catch((error) => {
          dispatch(fetchError(error));
          console.log(error);
        });
    });
  };
