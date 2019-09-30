import {
  combineReducers
} from 'redux';
import columnsReducer from './columnsReducer';
import searchReducer from './searchReducer';


const rootReducer = combineReducers({
  search: searchReducer,
  columns: columnsReducer,
});

export default rootReducer;
