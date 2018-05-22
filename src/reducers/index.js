import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

					// 이 combineReducers가 state를 mapping함!
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
