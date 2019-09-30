import axios from "axios";

import {
  GET_SEARCH_SUCCESS,
  GET_SEARCH_FAILURE,
  GET_SEARCH_START,
  CHANGE_COLUMNS_COUNT
} from "../types/types";

export const searchImages = query => {
  if (!query) return;
  return dispatch => {
    dispatch(searchStarted());
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://www.google.com/search?q=${query}&source=lnms&tbm=isch`
      )
      .then(data => data.data)
      .then(data => {
        const newData = [];
        const regExp = /<img.+?data-src="(?<src>.+?)".+?alt="(?<alt>.+?)".+?>/g;
        const result = data.matchAll(regExp);
        let imgCounter = 0;
        for (const key of result) {
          if (imgCounter >= 14) break;
          imgCounter++;
          const { src, alt } = key.groups;
          newData.push({ src, alt });
        }
        dispatch(searchSuccess(newData));
      })
      .catch(err => {
        dispatch(searchFail(err.message));
      });
  };
};

export const changeColumns = value => ({
  type: CHANGE_COLUMNS_COUNT,
  payload: value
});

export const searchStarted = () => ({
  type: GET_SEARCH_START
});

export const searchFail = err => ({
  type: GET_SEARCH_FAILURE,
  payload: err
});

export const searchSuccess = data => ({
  type: GET_SEARCH_SUCCESS,
  payload: data
});
