import { useState } from "react";
import ToDo from "../models/ToDo";
import "./ToDoItem.css";
import UpdateForm from "./UpdateForm";

interface Props {
    toDo: ToDo;
    index: number;
    onDelete: () => void;
    onToggle: () => void;
    onUpdate: (td: ToDo, i: number) => void;
}

const ToDoItem = ({toDo, onDelete, onToggle, onUpdate, index}: Props) => {

    const [showEditForm, setShowEditForm] = useState(false);

    return (
        <li className={`ToDoItem ${toDo.completed ? "complete" : ""}`}>
            <p className={"task priority-" + toDo.priorityLevel} onClick={onToggle}>{toDo.task}</p>
            <p className="due-date">Due on: {toDo.dueDate.toDateString()}</p>
            <button onClick={onDelete}>x</button>
            {!showEditForm ? (
                <button onClick={() => setShowEditForm(true)}>edit</button>
                ) : (
                <UpdateForm
                    toDo={toDo}
                    closeForm={() => setShowEditForm(false)}
                    onUpdate={onUpdate}
                    index={index}
                />
            )}
        </li>
    );
};

export default ToDoItem;
