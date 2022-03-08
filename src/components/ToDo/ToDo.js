import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	deleteToDoAction,
	completedChangeAction,
} from "../../redux/actions/toDoActions";

export default function ToDo() {
	const toDoList = useSelector((state) => state.toDo.toDos);
	const filter = useSelector((state) => state.filter);
	// console.log(filter);
	const dispatch = useDispatch();
	const deleteToDoHandler = (id) => {
		dispatch(deleteToDoAction({ id: id }));
	};
	const toDoStateHandler = (id, state) => {
		dispatch(completedChangeAction({ id: id, completed: state }));
	};

	const toDoLi = toDoList.map((toDo) => (
		<li key={toDo.id}>
			<input
				type="checkbox"
				checked={toDo.checked}
				onChange={(e) => toDoStateHandler(toDo.id, e.target.checked)}
			/>
			<span>{toDo.text}</span>
			<button onClick={() => console.log("edit")}>edit</button>
			<button onClick={() => deleteToDoHandler(toDo.id)}>del</button>
		</li>
	));

	return toDoLi;
}
