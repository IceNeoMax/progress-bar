import {
  GET_BAR,
  GET_BAR_ASYNC,
  CHANGE_BAR,
  START_LOADING,
  STOP_LOADING
} from "./const";

export const getBar = () => ({
  type: GET_BAR
});

export const getBarAsync = params => ({
  type: GET_BAR_ASYNC,
  params
});
export const changeBar = params => ({
  type: CHANGE_BAR,
  params
});
export const loading = () => ({
  type: START_LOADING
});
export const stopLoading = () => ({
  type: STOP_LOADING
});
