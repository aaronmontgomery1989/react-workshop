import { useState } from "react";
import ToDo from "../models/ToDo";
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";
import "./ToDoList.css";

const ToDoList = () => {
    const [toDos, setToDos] = useState<ToDo[]>([
        {
            task: "buy bday gift for friend",
            completed: false,
            priorityLevel: 2,
            dueDate: new Date("2023/03/10"),
          },
          {
            task: "shovel snow",
            completed: true,
            priorityLevel: 1,
            dueDate: new Date("2023/02/20"),
          },
          {
            task: "get groceries",
            completed: false,
            priorityLevel: 3,
            dueDate: new Date("2023/03/15"),
          }      
    ]);

    const addToDo = (td: ToDo): void => {
        setToDos((prev) => [...prev, td]);
    };

    const deleteToDo = (index: number): void => {
        //setToDos(prev => {
        //    const copyOfToDos = prev.slice(0);
        //    copyOfToDos.splice(index, 1);
        //    return copyOfToDos;
        //});
        setToDos((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
    };
    
    const toggleComplete = (index: number): void => {
        setToDos(prev => {
            const copyOfToDo = {...prev[index]}
            copyOfToDo.completed = !copyOfToDo.completed;
            return [...prev.slice(0, index), copyOfToDo, ...prev.slice(index + 1)];
        });
    };

    const updateItem = (updatedItem: ToDo, index: number): void => {
        setToDos(prev => [...prev.slice(0, index), updatedItem, ...prev.slice(index + 1)]);
    };

    return (
        <div className="ToDoList">
            <ToDoForm onAdd={addToDo} />
            <ol>
                {toDos.map((item, i) => (
                    <ToDoItem
                        key={`${i}${Math.random()}`}
                        toDo={item}
                        onDelete={() => deleteToDo(i)}
                        onToggle={() => toggleComplete(i)}
                        onUpdate={updateItem}
                        index={i}
                    />
                ))}
            </ol>
        </div>
    );
};

export default ToDoList;
