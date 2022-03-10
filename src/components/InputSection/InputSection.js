import React, { useState, useRef } from "react";

import { useDispatch } from "react-redux";
import { addToDo } from "../../redux/slices/toDoSlice";
import {
	showAll,
	showCompleted,
	showIncomplete,
} from "../../redux/slices/filterSlice";

// ovaj princip, ali preko redux-a!
// const FILTER_MAP = {
// const ALL = () => true;
// 	Active: (task) => !task.completed,
// 	Completed: (task) => task.completed,
// };
// const FILTER_NAMES = Object.keys(FILTER_MAP);

export default function InputSection() {
	const [toDo, setToDo] = useState("");
	// const [filter, setFilter] = useState(() => true);

	const inputField = useRef(null);
	const dispatch = useDispatch();

	const addToDoFunction = (e) => {
		e.preventDefault();
		if (toDo.trim() === "") return;
		dispatch(
			addToDo({
				text: toDo,
				completed: false,
			})
		);
		setToDo("");
		inputField.current.focus();
	};

	// const filterChanger = (e) => {
	// 	switch (e) {
	// 		case "All":
	// 			dispatch(showAll(() => true));
	// 			break;
	// 		case "Active":
	// 			dispatch(showIncomplete((item) => item.completed === false));
	// 			break;
	// 		case "Completed":
	// 			dispatch(showCompleted((item) => item.completed === true));
	// 			break;
	// 		default:
	// 			break;
	// 	}
	// };

	return (
		<div>
			<input
				value={toDo}
				onChange={(e) => setToDo(e.target.value)}
				onKeyPress={(e) => {
					if (e.key === "Enter") addToDoFunction(e);
				}}
				ref={inputField}
			/>
			<button onClick={addToDoFunction}>Add</button>
			<button onClick={() => dispatch(showAll(() => true))}>All</button>
			<button
				onClick={() =>
					dispatch(showIncomplete((item) => item.completed === false))
				}
			>
				Incomplete
			</button>
			<button
				onClick={() =>
					dispatch(showCompleted((item) => item.completed === true))
				}
			>
				Completed
			</button>
		</div>
	);
}
