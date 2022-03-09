import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import filterReducer from "./reducers/filterReducer";
import toDoReducer from "./reducers/toDoReducer";

const reducer = {
	filter: filterReducer,
	toDo: toDoReducer,
};

const customizedMiddleware = getDefaultMiddleware({
	serializableCheck: false,
});

export const store = configureStore({
	reducer,
	middleware: customizedMiddleware,
});
