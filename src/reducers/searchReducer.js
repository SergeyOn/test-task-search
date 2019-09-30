import {
  GET_SEARCH_SUCCESS,
  GET_SEARCH_FAILURE,
  GET_SEARCH_START,
} from '../types/types';


const initialState = {
  data: [],
  loading: false,
  loaded: false,
  error: null,
};

const searchReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_SEARCH_START:
      return {...state, loading: true};
    case GET_SEARCH_FAILURE:
      return {...state, loading: false, error: true};
    case GET_SEARCH_SUCCESS:
      return {...state, loading: false, data: payload};
    default:
      return state;
  }
};

export default searchReducer;