import { createReducer } from "@reduxjs/toolkit";
import {
	showAll,
	showCompleted,
	showIncomplete,
} from "../actions/filterActions";

const initialState = () => () => true;

const filterReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(showAll, (state, action) => (state = action.payload))
		.addCase(showCompleted, (state, action) => (state = action.payload))
		.addCase(showIncomplete, (state, action) => (state = action.payload));
});

export default filterReducer;
