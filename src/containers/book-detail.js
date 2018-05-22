import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
	render() {

		// 초기값 check.
		// null인 상태에서 구체적인 프로퍼티에의 접근을 명령할 경우 
		// 에러가 날것이기 때문에 이렇게 미리 null일 경우의 조건문을 걸어줌.
		if (!this.props.book) {
			return <div>Select a book to get started.</div>;
		}

		// null값이 아니라면 하단 코드가 실행되겠지
		return (
			<div>
			  <h3>Details for:</h3>
			  <div>{this.props.book.title}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		book: state.activeBook
	};
}
// 이렇게 mapStateToProps를 사용해줘야 redux의 state에 접근해서
// 이 container 컴포넌트에서 this.props로 접근할 수 있었지! 


export default connect(mapStateToProps)(BookDetail);
// conatiner로서 export 시켜주기!!
