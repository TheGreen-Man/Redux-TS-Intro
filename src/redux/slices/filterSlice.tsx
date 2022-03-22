import { createSlice } from "@reduxjs/toolkit";

const initialState = () => () => true;
const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		showAll(state, action) {
			return action.payload;
		},
		showCompleted(state, action) {
			return action.payload;
		},
		showIncomplete(state, action) {
			return action.payload;
		},
	},
});

export const { showAll, showCompleted, showIncomplete } = filterSlice.actions;

export default filterSlice.reducer;
