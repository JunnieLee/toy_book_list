// < container > 개념
//  ->  container is a special kind of react component 
//      that has direct access to the application state created by redux

// container로 등극시킬것인가 OR 그냥 plain react component로 놔둘 것인가?
// -> does that particular component cares when the application state changes? 

// 대체적으로 최대한 상위 컴포넌트를 컨데이너로 만드는 것이 좋음
// -> 즉, state의 특정 부분을 이용하는 최상위 부모 컴포넌트만이 redux에 연결되어야!


import React, { Component } from 'react';
import { connect } from 'react-redux';
// react view와 redux state를 연결시켜주기 위해선, 
// 제 3의 라이브러리 react-redux를 사용해야! (원래 둘은 완전 별개의 라이브러리임)
// react-redux를 써야지만 그 두개가 연결될 수 있음~!


class BookList extends Component {

	// this function will return an array of books
	renderList() {
				// 맨 하단에 정의된 mapStateToProps함수를 통해 
				// this.props.books를 자유자재로 이렇게 사용할 수 있게된거!
		return this.props.books.map((book) => {
			return (
				// list에는 각각 요소에 key를 부여해줘야 리액트에서 에러가 안남
				<li key={book.title} className="list-group-item">
					{book.title}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state) {
	// Whatever is returned here will show up as props inside of BookList
	return {
		books: state.books 
		// 이렇게 해놓으면 이 컨테이너 컴포넌트의 props.books를 통해
		// state중 books 부문에 접근할 수 있게 됨!!
	};
} 
// 이게 바로 redux와 react의 container component를 연결시키는 방법!!
// 실질적으로 이 mapStateToProps함수를 통해 react와 redux가 연결되는거지!!


export default connect(mapStateToProps)(BookList);
// 우린 plain BookList 컴포넌트가 아닌, 
// redux랑 연결되어 fully-functional한 container역할을 해줄
// container로서의 BookList를 export default 시켜줄것임! 
// 그렇게 하는데에 있어 connect함수를 활용하면 됨!! :)


// * things to note *

// 1. state가 변하면, 이 container는 즉시 re-render되어 
//    새로운 book list를 갖게 됨

// 2. connect를 사용함으로써 컨테이너를 생성하는데, 
//    application state가 바뀔때마다 mapStateToProps함수 안의 return 오브젝트 값이
//    업데이트 된 state값을 반영하여 BookList컴포넌트의 this.props로 들어갈것임