import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addToDoAction } from "../../redux/actions/toDoActions";
import { nanoid } from "nanoid";

export default function InputSection() {
	const [toDo, setToDo] = useState("");

	const dispatch = useDispatch();

	const addToDo = (e) => {
		// e.preventDefault();

		dispatch(
			addToDoAction({
				text: toDo,
				id: nanoid(),
			})
		);
	};

	return (
		<div>
			<input value={toDo} onChange={(e) => setToDo(e.target.value)} />
			<button onClick={addToDo}>Add</button>
			<button>All</button>
			<button>Incomplete</button>
			<button>Completed</button>
		</div>
	);
}
