// static하지 않고 동적인 state를 다루는 reducer의 경우엔
// 이렇게 state를 첫번째 인자로, action을 두번째 인자로 가짐!
// 근데.. state argument is not application state,
// only the state this reducer is responsible for 

// 유효한 action이라면, 해당 action에 따라 
// state를 변화시킬 수 있는 여지를 지니는 reducer 함수라는 말씀!

// action이 dispatch될때마다 reducer가 호출됨!
// 근데 해당 액션이 고려할 필요가 없는 종류의 액션이라면,
// 그냥 기존 state를 있는 그대로 전달함.

		// 처음 앱 켰을때 state가 undefined면 디폴트값은 null로 해라 (ES6 문법)
export default function(state = null, action) {
	// 만약 action type이 'BOOK_SELECTED'라면 해당 책의 payload를 반환
	switch(action.type) {
	case 'BOOK_SELECTED':
		return action.payload
	}

	// 아니라면 그냥 기존 state 그대로 반환 (no변화)
	return state
}