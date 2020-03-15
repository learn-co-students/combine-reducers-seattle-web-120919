import { combineReducers } from "redux";
import booksReducer from './reducers/booksReducer'
import authorsReducer from './reducers/authorsReducer'

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer
});

export default rootReducer;