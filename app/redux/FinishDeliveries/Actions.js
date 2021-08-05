// @flow

import {
  API_PENDING,
  API_SUCCESS,
  API_ADD,
  API_UPDATE,
  API_DELETE,
  API_ERROR,
} from "./Types";

export const fetchData = () => ({
  type: API_PENDING,
});

export const fetchSuccess = (data: any) => ({
  type: API_SUCCESS,
  payload: data,
});

export const addSuccess = (data: any) => ({
  type: API_ADD,
  payload: data,
});

export const deleteSuccess = (id: any) => ({
  type: API_DELETE,
  payload: id,
});

export const updateSuccess = (data: any) => ({
  type: API_UPDATE,
  payload: data,
});

export const fetchError = (error: any) => ({
  type: API_ERROR,
  payload: error,
});
