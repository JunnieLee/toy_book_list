// 얘는 동적이지 않고 static한 state를 다루는 reducer임.
// 따라서 이 리듀서 함수는 딱히 특수한 인자를 가지지 않음.

export default function() {
	return [
		{ title: 'Javascript: The Good Parts' },
		{ title: 'Harry Potter' },
		{ title: 'The Dark Tower' },
		{ title: 'Eloquent Ruby' }
	]
}