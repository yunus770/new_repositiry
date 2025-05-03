import { useState } from "react";

function TodoApp  () {
const [task, setTask]=useState("");
const [todos, setTodos]=useState([]);


const addTask = () => {
 if (task.trim() === "")return;
 setTodos ([...task, todos]);
 setTask ("");
}

const removeTask = (index) =>{
    const newTodos = todos.filter ((_, i)=> i !== index);
    setTodos(newTodos);
}

return (
    <div>
        <h2>Todo List</h2>
        <input value={task} onChange={(e) => setTask (e.target.value)}/>
        <button onClick={addTask}>Goşmak</button>
        <ul>
            {todos.map((t,i)=>
            <li key={i}>
            {t} <button onClick={() =>removeTask(i)}>Pozmak</button>
            </li>
        )}
        </ul>
    </div>
)
}
export default TodoApp;