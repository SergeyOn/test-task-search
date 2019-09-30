import { CHANGE_COLUMNS_COUNT } from '../types/types';

const initialState = 3;

const columnsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case CHANGE_COLUMNS_COUNT:
      return payload;
    default:
      return state;
  }
};

export default columnsReducer;
