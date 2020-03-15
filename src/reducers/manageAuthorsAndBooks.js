import { combineReducers } from "redux";
import booksReducer from './reducers/booksReducer'
import authorsReducer from './reducers/authorsReducer'

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default rootReducer;