import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import toDoSlice from "./slices/toDoSlice";

const reducer = {
	filter: filterSlice,
	toDo: toDoSlice,
};

const customizedMiddleware = getDefaultMiddleware({
	serializableCheck: false,
});
export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
	reducer,
	middleware: customizedMiddleware,
});
