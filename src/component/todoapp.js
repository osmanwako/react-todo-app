import Todotitle from './todotitle';
import Todoform from './todoform';
import Todolist from './todolist';

function TodoApp() {
  return (
    <div class="todos">
      <Todotitle />
      <Todoform />
      <span class="submit-warning">Please insert your todo list</span>
      <Todolist />
    </div>
  );
}
export default TodoApp;
