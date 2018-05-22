import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

					
			        // 하단 object들을 combineReducers로 넘길때, 
					// redux가 application state를 생성함.
const rootReducer = combineReducers({ 
					// 이 combineReducers가 state를 mapping함!
  books: BooksReducer // key는 state이름, value는 reducer 그 자체!
  
});

export default rootReducer;
