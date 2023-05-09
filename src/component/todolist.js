function Todolist() {
    return <ul>
        <li className="to-do-list">
            <span>
                <input type="checkbox" className="input-check" />
                <span className="todo-selected">Osman Wako</span>
            </span>
            <button>Delete</button>
        </li>
        <li className="to-do-list">
            <span>
                <input type="checkbox" className="input-check" />
                <span>Osman Wako</span>
            </span>
            <button>Delete</button>
        </li>
        <li className="to-do-list">
            <span>
                <input type="checkbox" className="input-check" />
                <span>Osman Wako</span>
            </span>
            <button>Delete</button>
        </li>
    </ul>
}
export default Todolist;