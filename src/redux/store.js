import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import toDoReducer from "./slices/toDoSlice";

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
