import { createAction } from "@reduxjs/toolkit";

export const showAll = createAction("SHOW_ALL");
export const showCompleted = createAction("SHOW_COMPLETED");
export const showIncomplete = createAction("SHOW_INCOMPLETE");
