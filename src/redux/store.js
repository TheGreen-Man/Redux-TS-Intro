import { configureStore } from "@reduxjs/toolkit";
// import toDoReducer from "./to-dos-slice";
// import dummyReducer from "./dummyReducer";
import toDoReducer from "./reducers/toDoReducer";

export const store = configureStore({
	reducer: {
		// dummy: dummyReducer,
		toDo: toDoReducer,
	},
});
