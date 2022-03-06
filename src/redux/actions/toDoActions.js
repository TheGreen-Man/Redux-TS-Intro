// export const ADD_TODO = "ADD_ToDo";

// export const addToDoAction = (payload) => {
//     return{
//         type: ADD_TODO,
//         payload
//     }
// }

import { createAction } from "@reduxjs/toolkit";

export const addToDoAction = createAction("ADD_TODO");
export const deleteToDoAction = createAction("DELETE_TODO");
