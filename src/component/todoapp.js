import { v4 as uuidv4 } from "uuid";
import Todotitle from './todotitle';
import Todoform from './todoform';
import Todolist from './todolist';
import { useState } from 'react';

function TodoApp() {
  const [message, setmessage] = useState('');
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: 'Gather project requirements',
      completed: true,
    },
    {
      id: uuidv4(),
      title: 'Feasibility study and Analysis',
      completed: true,
    },
    {
      id: uuidv4(),
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: uuidv4(),
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Deploy to live server',
      completed: false,
    },
  ]);
  const addTodo = (title) => {
    if (title.trim()) {
      setTodos(() => [...todos, { id: uuidv4(), title: title, completed: false }]);
      setmessage('');
    }
    else {
      setmessage('Please insert Your todo!');
    }
  }
  return (
    <div class="todos">
      <Todotitle />
      <Todoform addItem={addTodo} />
      <span className="submit-warning" >{message}</span>
      <Todolist todosProps={todos} setTodos={setTodos} />
    </div>
  );
}
export default TodoApp;
