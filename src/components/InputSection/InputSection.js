import React, { useState, useRef } from "react";

import { useDispatch } from "react-redux";
import { addToDoAction } from "../../redux/actions/toDoActions";
import {
	showAll,
	showCompleted,
	showIncomplete,
} from "../../redux/actions/filterActions";
import { nanoid } from "nanoid";

// ovaj princip, ali preko redux-a!
// const FILTER_MAP = {
// 	All: () => true,
// 	Active: (task) => !task.completed,
// 	Completed: (task) => task.completed,
// };
// const FILTER_NAMES = Object.keys(FILTER_MAP);

export default function InputSection() {
	const [toDo, setToDo] = useState("");
	// const [filter, setFilter] = useState(() => true);

	const inputField = useRef(null);
	const dispatch = useDispatch();

	const addToDo = (e) => {
		e.preventDefault();
		if (toDo.trim() === "") return;
		dispatch(
			addToDoAction({
				text: toDo,
				completed: false,
				id: nanoid(),
			})
		);
		setToDo("");
		inputField.current.focus();
	};

	// const filterChanger = (e) => {
	// 	switch (e) {
	// 		case "All":
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
					if (e.key === "Enter") addToDo(e);
				}}
				ref={inputField}
			/>
			<button onClick={addToDo}>Add</button>
			<button onClick={dispatch(showAll(() => true))}>All</button>
			<button
				onClick={dispatch(
					showIncomplete((item) => item.completed === false)
				)}
			>
				Active
			</button>
			<button
				onClick={dispatch(
					showCompleted((item) => item.completed === true)
				)}
			>
				Completed
			</button>
		</div>
	);
}
