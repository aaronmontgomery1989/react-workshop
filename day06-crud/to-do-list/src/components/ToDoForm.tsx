//import { FormEvent, useState } from "react";
import ToDo from "../models/ToDo";
import "./ToDoForm.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema, SchemaProps } from "../services/formSchema";


interface Props {
    onAdd: (td: ToDo) => void;
}

const ToDoForm = ({ onAdd }: Props) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}} = useForm<SchemaProps>({resolver: yupResolver(formSchema)});
        
    /*
    const [task, setTask] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [priorityLevel, setPriorityLevel] = useState("1");
    
    const submitHandler = (e: FormEvent): void => {
        e.preventDefault();
        const newToDo: ToDo = {
            task,
            dueDate: new Date(dueDate.replace(/-/g, "/").replace(/T.+/, "")),
            priorityLevel: +priorityLevel,
            completed: false
        };
        onAdd(newToDo);
        setTask("");
        setDueDate("");
        setPriorityLevel("");
    };
    */

    const yupSubmitHandler = (values: SchemaProps) => {
        onAdd({
            ...values,
            completed: false,
            dueDate: new Date(),
            priorityLevel: 1});
        reset();
    };
    
    return (
        <form className="ToDoForm" onSubmit={handleSubmit(yupSubmitHandler)}>
            <label htmlFor="task">task</label>
            <input
                type="text"
                //name="task"
                id="task"
                /*value={task}
                onChange={(e) => setTask(e.target.value)*/
                {...register("task")}
            />
            <span className="error">{errors.task?.message}</span>
            <label htmlFor="dueDate">Due date:</label>
            <input
                type="date"
                //name="dueDate"
                id="dueDate"
                /*value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}*/
                {...register("dueDate")}
            />
            <label htmlFor="priorityLevel">Priority Level (1-3):</label>
            <input
                type="number"
                //name="priorityLevel"
                id="priorityLevel"
                //value={priorityLevel}
                min={1}
                max={3}
                /*step={1}
                onChange={(e) => setPriorityLevel(e.target.value)}*/
                {...register("priorityLevel")}
            />
            <button className="submit-btn">Update Task</button>
        </form>
    );
};

export default ToDoForm;
