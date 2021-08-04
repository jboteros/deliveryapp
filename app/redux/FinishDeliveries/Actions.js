// @flow

import { API_PENDING, API_SUCCESS, API_ERROR } from "./Types";

export const fetchData = () => ({
  type: API_PENDING,
});

export const fetchSuccess = (data: any) => ({
  type: API_SUCCESS,
  payload: data,
});

export const fetchError = (error: any) => ({
  type: API_ERROR,
  payload: error,
});
