import {
	CHANGE_INPUT,
	ADD_TODOS
} from "./actionTypes.js"
const initalState = {
	inputValue: 'do it',
	todos: [
		'cm',
		'sy'
	]
}

export default (state = initalState, action) => {
	switch (action.type) {
		case CHANGE_INPUT:
			return Object.assign({}, state, {
				inputValue: action.value
			})
		case ADD_TODOS:
			let newState = Object.assign({}, state);
			newState.todos.unshift(newState.inputValue);
			newState.inputValue = "";
			return newState
		default:
			return state
	}
}