import { useState } from "react";

import TodoTable from "./TodoTable";

function TodoList() {

    const [todos, setTodos] = useState([]);

    const [userInput, setUserInput] = useState({ description: '', date: '' });
    const [count, setCount] = useState(0)

    const handleChange = (event) => {
        setUserInput({ ...userInput, [event.target.name]: event.target.value });
    };

    const addTodo = () => {
        if (!userInput.description) {
            alert("Missing description");
        } else {
            setTodos([...todos, { description: userInput.description, date: userInput.date }]);
            setUserInput({ description: '', date: '' });
        }
    };


    return (
        <>
            <h1>Simple Todolist</h1>
            <p className="add-todo">Add todo:</p>
            <p className="thin-border">
                Description:<input name="description" onChange={handleChange} value={userInput.description} />
                Date:<input name="date" onChange={handleChange} value={userInput.date} />
                <button name="add" onClick={addTodo}>Add</button>
            </p>
            <TodoTable todos={todos} setTodos={setTodos} />
        </>
    );
}

export default TodoList;