import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteToDoAction } from "../../redux/actions/toDoActions";

export default function ToDo() {
	const toDoList = useSelector((state) => state.toDo.toDos);

	const dispatch = useDispatch();
	const deleteToDoHandler = (id) => {
		dispatch(deleteToDoAction({ id: id }));
	};

	const toDoLi = toDoList.map((toDo) => (
		<li key={toDo.id}>
			<input type="checkbox" />
			<span>{toDo.text}</span>
			<button onClick={() => console.log("edit")}>edit</button>
			<button onClick={() => deleteToDoHandler(toDo.id)}>del</button>
		</li>
	));

	return toDoLi;
}
