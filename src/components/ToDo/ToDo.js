import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	deleteToDo,
	completedChange,
	editable,
	editTask,
} from "../../redux/slices/toDoSlice";

export default function ToDo() {
	const [taskID, setTaskID] = useState("");

	const toDoList = useSelector((state) => state.toDo.toDos);
	const filter = useSelector((state) => state.filter);
	const dispatch = useDispatch();
	const deleteToDoHandler = (id) => {
		dispatch(deleteToDo({ id: id }));
	};
	const toDoStateHandler = (id, state) => {
		dispatch(completedChange({ id: id, completed: state }));
	};

	const editHandler = (id) => {
		dispatch(editable({ id: id, editable: true }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(
			editTask({ id: taskID, text: e.target[0].value, editable: false })
		);
	};

	const toDoLi = toDoList.filter(filter).map((toDo) => (
		<li key={toDo.id}>
			<input
				type="checkbox"
				checked={toDo.completed}
				onChange={(e) => toDoStateHandler(toDo.id, e.target.checked)}
			/>
			{toDo.editable ? (
				<form onSubmit={handleSubmit}>
					<input placeholder={`Edit ${toDo.text}`} autoFocus />
					<button type="submit" onClick={() => setTaskID(toDo.id)}>
						Save
					</button>
					<button
						onClick={() =>
							dispatch(editable({ id: toDo.id, editable: false }))
						}
					>
						Cancel
					</button>
				</form>
			) : (
				<>
					<span>{toDo.text}</span>
					<button onClick={() => editHandler(toDo.id)}>Edit</button>
					<button onClick={() => deleteToDoHandler(toDo.id)}>
						Delete
					</button>
				</>
			)}
		</li>
	));

	return toDoLi;
}
