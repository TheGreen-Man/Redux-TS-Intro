import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import toDoSlice from "./slices/toDoSlice";
// import editSlice from "./slices/editableSlice";

const reducer = {
	filter: filterSlice,
	toDo: toDoSlice,
	// edit: editSlice
};

const customizedMiddleware = getDefaultMiddleware({
	serializableCheck: false,
});

export const store = configureStore({
	reducer,
	middleware: customizedMiddleware,
});
