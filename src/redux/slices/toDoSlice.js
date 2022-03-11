import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
	toDos: [],
};

const toDoSlice = createSlice({
	name: "toDos",
	initialState,
	reducers: {
		addToDo: {
			reducer: (state, action) => {
				state.toDos.push(action.payload);
			},
			prepare: (value) => {
				return {
					payload: {
						...value,
						id: nanoid(),
						editable: false,
					},
				};
			},
		},
		deleteToDo(state, action) {
			state.toDos = state.toDos.filter(
				(toDo) => toDo.id !== action.payload.id
			);
		},
		completedChange(state, action) {
			state.toDos = state.toDos.map((toDo) =>
				toDo.id === action.payload.id
					? { ...toDo, completed: action.payload.completed }
					: { ...toDo }
			);
		},
		editable(state, action) {
			state.toDos = state.toDos.map((toDo) =>
				toDo.id === action.payload.id
					? { ...toDo, editable: action.payload.editable }
					: { ...toDo }
			);
		},
	},
});

export const { addToDo, deleteToDo, completedChange, editable } =
	toDoSlice.actions;

export default toDoSlice.reducer;
