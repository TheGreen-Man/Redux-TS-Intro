import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	deleteToDo,
	completedChange,
	editable,
} from "../../redux/slices/toDoSlice";

export default function ToDo() {
	const [editedToDo, setEditedToDo] = useState("");

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

	const toDoLi = toDoList.filter(filter).map((toDo) => (
		<li key={toDo.id}>
			<input
				type="checkbox"
				checked={toDo.completed}
				onChange={(e) => toDoStateHandler(toDo.id, e.target.checked)}
			/>
			{toDo.editable ? (
				<input
					placeholder={`Edit ${toDo.text}`}
					value={editedToDo}
					onChange={(e) => setEditedToDo(e.target.value)}
					autoFocus
				/>
			) : (
				<span>{toDo.text}</span>
			)}
			{toDo.editable ? (
				<button
					onClick={() =>
						dispatch(editable({ id: toDo.id, editable: false }))
					}
				>
					Save
				</button>
			) : (
				<button onClick={() => editHandler(toDo.id)}>Edit</button>
			)}
			{toDo.editable ? (
				<button
					onClick={() =>
						dispatch(editable({ id: toDo.id, editable: false }))
					}
				>
					Cancel
				</button>
			) : (
				<button onClick={() => deleteToDoHandler(toDo.id)}>
					Delete
				</button>
			)}
		</li>
	));

	return toDoLi;
}
