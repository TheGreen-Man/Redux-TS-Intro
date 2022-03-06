import { addToDoAction } from "./actions/toDoActions";

console.log(addToDoAction("PENIS"));

/* eslint-disable import/no-anonymous-default-export */
export default (state = [], action) => {
	switch (action.type) {
		default:
			return state;
	}
};
