import { createReducer } from "@reduxjs/toolkit";
import {
	addToDoAction,
	deleteToDoAction,
	completedChangeAction,
} from "../actions/toDoActions";

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
		})
		.addCase(completedChangeAction, (state, action) => {
			state.toDos = state.toDos.map((toDo) =>
				toDo.id === action.payload.id
					? { ...toDo, completed: action.payload.completed }
					: { ...toDo }
			);
		});
});

export default toDoReducer;
