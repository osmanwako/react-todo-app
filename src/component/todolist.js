import Todoitem from "./todoitem";

function Todolist({ todosProps, setTodos }) {
    return <ul>
        {todosProps.map((todo) => (
            <Todoitem key={todo.id} itemProp={todo} setTodos={setTodos} />
        ))}
    </ul>
}
export default Todolist;