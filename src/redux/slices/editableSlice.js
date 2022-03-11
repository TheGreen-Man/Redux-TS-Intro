import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const editSlice = createSlice({
	name: "editable",
	initialState,
	reducers: {
		notEditable(state, action) {
			return action.payload;
		},
		isEditable(state, action) {
			return action.payload;
		},
	},
});

export const { notEditable, isEditable } = editSlice.actions;

export default editSlice.reducer;
