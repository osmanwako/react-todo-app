import Todotitle from './todotitle';
import Todoform from './todoform';
import Todolist from './todolist';
import { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Gather project requirements',
      completed: true,
    },
    {
      id: 2,
      title: 'Feasibility study and Analysis',
      completed: true,
    },
    {
      id: 3,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 4,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 5,
      title: 'Deploy to live server',
      completed: false,
    },
  ]);
  const [warn, setmessage] = useState(false);
  const addTodo = (title) => {
    if (title === '') {
      setmessage(true);
    }
    else {
      setTodos(() => [...todos, { id: todos.length, title: title, completed: false }]);
      setmessage(false);
    }
  }
  return (
    <div class="todos">
      <Todotitle />
      <Todoform addItem={addTodo} />
      <span className={warn ? 'submit-warning' : 'd-none'} >Please insert your todo list</span>
      <Todolist todosProps={todos} setTodos={setTodos} />
    </div>
  );
}
export default TodoApp;
