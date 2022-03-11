import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	deleteToDo,
	completedChange,
	editable,
} from "../../redux/slices/toDoSlice";

export default function ToDo() {
	const [isEditable, setEditable] = useState(true);
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

	const editHandler = (id, text) => {
		// setEditedToDo(text);
		dispatch(editable({ id: id, editable: isEditable }));
		setEditable(!isEditable);
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
					value={editedToDo}
					onChange={(e) => setEditedToDo(e.target.value)}
				/>
			) : (
				<span>{toDo.text}</span>
			)}
			<button onClick={() => editHandler(toDo.id, toDo.text)}>
				edit
			</button>
			<button onClick={() => deleteToDoHandler(toDo.id)}>del</button>
		</li>
	));

	return toDoLi;
}
