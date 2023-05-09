import './App.css';

function App() {
  return (
    <div class="todos">
      <header class="todo-header">
        <h1>To do Applications</h1>
        <p>Items will persist in the browser local storage</p>
      </header>
      <form class="form-container">
        <input
          type="text"
          placeholder="Add Todo..."
          class="input-text input-both"
          value=""
        />
        <button class="input-submit">&#10010;</button>
      </form>
      <span class="submit-warning">Please insert your todo list</span>
      <ul>
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
    </div>
  );
  
}

export default App;
