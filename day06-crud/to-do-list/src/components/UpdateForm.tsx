import { FormEvent, useState } from "react";
import ToDo from "../models/ToDo";
import "./UpdateForm.css";

interface Props {
    toDo: ToDo;
    closeForm: () => void;
    onUpdate: (td: ToDo, i: number) => void;
    index: number;
}

const UpdateForm = ({ toDo, closeForm }: Props) => {
    const [task, setTask] = useState(toDo.task);
    const [dueDate, setDueDate] = useState(toDo.dueDate.toDateString());
    const [priorityLevel, setPriorityLevel] = useState(toDo.priorityLevel.toString());
    
    const submitHandler = (e: FormEvent): void => {
        e.preventDefault();
        /*
        onUpdate(
            {
                ...toDo,
                task,
                dueDate: new Date(dueDate.replace(/-/g, "/").replace(/T.+/, "")),
                priorityLevel: +priorityLevel,
            },
            index);
            */
        closeForm();
    };
    
    return (
        <form className="UpdateForm" onSubmit={submitHandler}>
            <label htmlFor="task">task</label>
            <input
                type="text"
                name="task"
                id="task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <label htmlFor="dueDate">Due date:</label>
            <input
                type="date"
                name="dueDate"
                id="dueDate"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />
            <label htmlFor="priorityLevel">Priority Level (1-3):</label>
            <input
                type="number"
                name="priorityLevel"
                id="priorityLevel"
                value={priorityLevel}
                min={1}
                max={3}
                step={1}
                onChange={(e) => setPriorityLevel(e.target.value)}
            />
            <button className="submit-btn">Update Task</button>
        </form>
    );
};

export default UpdateForm;
