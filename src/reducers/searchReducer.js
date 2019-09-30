

const initialState = {
  data: {},
  loading: false,
  loaded: false,
  error: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_START':
      return state;
    default:
      return state;
  }
};

export default searchReducer;