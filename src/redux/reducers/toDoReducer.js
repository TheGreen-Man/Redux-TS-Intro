import { createReducer } from "@reduxjs/toolkit";
import { addToDoAction, deleteToDoAction } from "../actions/toDoActions";

const initialState = {
	toDos: [],
};

const toDoReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(addToDoAction, (state, action) => {
			state.toDos.push(action.payload);
		})
		.addCase(deleteToDoAction, (state, action) => {
			state.toDos = state.toDos.filter(
				(toDo) => toDo.id !== action.payload.id
			);
		});
});

export default toDoReducer;
