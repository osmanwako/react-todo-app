function Todoitem({ itemProp, setTodos }) {
    return <li className="to-do-list">
        <span>
            <input type="checkbox" className="input-check" />
            <span className={itemProp.completed ? 'todo-complete' : 'todo-start'}> {itemProp.title}</span>
        </span>
        <button>Delete</button>
    </li>;
}

export default Todoitem;