import React from 'react';
import { connect } from "react-redux";
import { CHANGE_INPUT,ADD_TODOS } from "../store/actionTypes.js"
class App extends React.Component {
	
	render() {
		return (
			<div>
				<div>
					<input style={{width: "300px", height: "34px", paddingLeft: "20px", marginRight: "30px"}} 
						   placeholder={this.props.inputValue}
						   value={this.props.inputValue}
						   onChange={this.props.changeInput}
					/>
					<button style={{width: "80px", height: "40px"}}
							onClick={this.props.addTodosItem}
							>提交</button>
					<ul style={{listStyle: "none",margin: "0", padding: "0"}}>
						{this.props.todos.map((item,index) => {
							return (<li key={index}>{item}</li>)
						})}
						
					</ul>
				</div>
			</div>
		);
	}


}
const mapStateToProps = (state) => {
	return {
		inputValue: state.inputValue,
		todos: state.todos
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		changeInput(e){
			let action = {
				type: CHANGE_INPUT,
				value: e.target.value
			}
			dispatch(action);
		},
		addTodosItem(){
			let action = { type: ADD_TODOS }
			dispatch(action)
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

