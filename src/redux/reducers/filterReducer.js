import { createReducer } from "@reduxjs/toolkit";
import {
	showAll,
	showCompleted,
	showIncomplete,
} from "../actions/filterActions";

const initialState = function () {
	return function () {
		return true;
	};
};

const filterReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(showAll, (state, action) => action.payload)

		.addCase(showCompleted, (state, action) => action.payload)
		.addCase(showIncomplete, (state, action) => action.payload);
});

export default filterReducer;
