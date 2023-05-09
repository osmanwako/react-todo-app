import { useState } from "react";
import { FaTrash } from "react-icons/fa";

function Todoitem({ itemProp, setTodos, removeId }) {
    const [check, setCheck] = useState(itemProp.completed);
    const oncheck = () => {
        setCheck(() => !check);
    }

    return <li className="to-do-list">
        <span>
            <input type="checkbox" className="input-check" checked={check} onClick={oncheck} />
            <span className={check ? 'todo-complete' : 'todo-start'}> {itemProp.title}</span>
        </span>
        <button onClick={() => removeId(itemProp.id)} className="content-button">
            <FaTrash style={{ color: "#5e5e5e", fontSize: "16px" }} />
        </button>
    </li>;
}

export default Todoitem;