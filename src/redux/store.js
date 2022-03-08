import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./reducers/filterReducer";
import toDoReducer from "./reducers/toDoReducer";

export const store = configureStore({
	reducer: {
		filter: filterReducer,
		toDo: toDoReducer,
	},
});
