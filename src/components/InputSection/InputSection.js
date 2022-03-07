import React, { useState, useRef } from "react";

import { useDispatch } from "react-redux";
import { addToDoAction } from "../../redux/actions/toDoActions";
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
			<button>All</button>
			<button>Active</button>
			<button>Completed</button>
		</div>
	);
}
