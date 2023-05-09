import { useState } from "react";
import Todoitem from "./todoitem";

function Todolist({ todosProps, setTodos }) {

    const removetodo = (id) => {
        let items = todosProps.filter((todo) => {
            if (todo.id !== id) return todo;
        });
        setTodos(items);
    };

    return <ul>
        {todosProps.map((todo) => (
            <Todoitem key={todo.id} itemProp={todo} setTodos={setTodos} removeId={removetodo} />))}
    </ul>
}
export default Todolist;