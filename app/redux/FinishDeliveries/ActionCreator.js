import axios from "axios";
import { Dispatch } from "redux";
import {
  fetchData,
  fetchSuccess,
  deleteSuccess,
  updateSuccess,
  fetchError,
  addSuccess,
} from "./Actions";

export const FinishDeliveriesActionCreator = () => (dispatch: Dispatch) => {
  dispatch(fetchData());
  return new Promise((): Promise<?Response> => {
    axios
      .get("https://61098931d71b67001763999c.mockapi.io/api/finishDelivery/")
      .then((response) => {
        dispatch(fetchSuccess(response.data));
      })
      .catch((error) => {
        console.log("🚀 ~ fetchSuccess ~ error", error);
        dispatch(fetchError(error));
      });
  });
};

export const AddDeliveryActionCreator =
  (item, status) => (dispatch: Dispatch) => {
    dispatch(fetchData());
    return new Promise((): Promise<?Response> => {
      axios
        .post(
          `https://61098931d71b67001763999c.mockapi.io/api/finishDelivery/`,
          {
            deliveryId: item.id,
            status,
            latitude: item.latitude,
            longitude: item.longitude,
          },
        )
        .then((response) => {
          dispatch(addSuccess(response.data));
        })
        .catch((error) => {
          console.log("🚀 ~ addSuccess ~ error", error);
          dispatch(fetchError(error));
        });
    });
  };

export const DeleteDeliveryActionCreator = (id) => (dispatch: Dispatch) => {
  dispatch(fetchData());
  return new Promise((): Promise<?Response> => {
    axios
      .delete(
        `https://61098931d71b67001763999c.mockapi.io/api/finishDelivery/${id}`,
      )
      .then((response) => {
        dispatch(deleteSuccess(id));
      })
      .catch((error) => {
        console.log("🚀 ~ deleteSuccess ~ error", error);
        dispatch(fetchError(error));
      });
  });
};

export const UpdateDeliveryActionCreator =
  (item, status) => (dispatch: Dispatch) => {
    dispatch(fetchData());
    return new Promise((): Promise<?Response> => {
      axios
        .put(
          `https://61098931d71b67001763999c.mockapi.io/api/finishDelivery/${item.id}`,
          { status },
        )
        .then((response) => {
          dispatch(updateSuccess(response.data));
        })
        .catch((error) => {
          console.log("🚀 ~ updateSuccess ~ error", error);
          dispatch(fetchError(error));
        });
    });
  };
