import axios from "axios";
import { Dispatch } from "redux";
import { fetchData, fetchSuccess, fetchError } from "./Actions";

export const DeliveriesActionCreator = () => (dispatch: Dispatch) => {
  dispatch(fetchData());
  return new Promise((): Promise<?Response> => {
    axios
      .get("https://61098931d71b67001763999c.mockapi.io/api/deliveries")
      .then((response) => {
        dispatch(fetchSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchError(error));
        console.log(error);
      });
  });
};
