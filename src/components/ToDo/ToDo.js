import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteToDo, completedChange } from "../../redux/slices/toDoSlice";

export default function ToDo() {
	const [editable, setEditable] = useState(false);
	const focusMe = useRef(null);
	const toDoList = useSelector((state) => state.toDo.toDos);
	const filter = useSelector((state) => state.filter);
	const dispatch = useDispatch();
	const deleteToDoHandler = (id) => {
		dispatch(deleteToDo({ id: id }));
	};
	const toDoStateHandler = (id, state) => {
		dispatch(completedChange({ id: id, completed: state }));
	};

	const editHandler = () => {
		setEditable(!editable);
		focusMe.current.focus();
	};
	const toDoLi = toDoList.filter(filter).map((toDo) => (
		<li key={toDo.id}>
			<input
				type="checkbox"
				checked={toDo.completed}
				onChange={(e) => toDoStateHandler(toDo.id, e.target.checked)}
			/>
			{editable ? (
				<input ref={focusMe} value={toDo.text} />
			) : (
				<span>{toDo.text}</span>
			)}
			<button onClick={() => editHandler()}>edit</button>
			<button onClick={() => deleteToDoHandler(toDo.id)}>del</button>
		</li>
	));

	return toDoLi;
}
