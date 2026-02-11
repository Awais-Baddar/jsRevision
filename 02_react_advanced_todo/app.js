const { useReducer, useMemo, useState, useEffect, useCallback } = React;

const STORAGE_KEY = "advanced-react-todos-v1";

function readLocalTodos() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveLocalTodos(todos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function todoReducer(state, action) {
  switch (action.type) {
    case "add":
      return [action.payload, ...state];
    case "toggle":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "remove":
      return state.filter((todo) => todo.id !== action.id);
    case "clear-completed":
      return state.filter((todo) => !todo.completed);
    default:
      return state;
  }
}

function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, [], readLocalTodos);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    saveLocalTodos(todos);
  }, [todos]);

  const addTodo = useCallback(
    (event) => {
      event.preventDefault();
      const trimmed = title.trim();
      if (!trimmed) return;

      dispatch({
        type: "add",
        payload: {
          id: crypto.randomUUID(),
          title: trimmed,
          priority,
          completed: false,
          createdAt: new Date().toISOString(),
        },
      });

      setTitle("");
      setPriority("medium");
    },
    [title, priority]
  );

  const visibleTodos = useMemo(() => {
    return todos
      .filter((todo) => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
      })
      .filter((todo) =>
        todo.title.toLowerCase().includes(search.trim().toLowerCase())
      )
      .sort((a, b) => {
        const rank = { high: 0, medium: 1, low: 2 };
        if (rank[a.priority] !== rank[b.priority]) {
          return rank[a.priority] - rank[b.priority];
        }
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
  }, [todos, filter, search]);

  const stats = useMemo(() => {
    const total = todos.length;
    const done = todos.filter((todo) => todo.completed).length;
    return {
      total,
      done,
      left: total - done,
    };
  }, [todos]);

  return (
    <section className="app">
      <h1>Advanced React Todo + Local Storage</h1>

      <form className="grid" onSubmit={addTodo}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a todo..."
          aria-label="Todo title"
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          aria-label="Priority"
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          aria-label="Search todos"
        />

        <button className="primary" type="submit">
          Add
        </button>
      </form>

      <div className="toolbar">
        {[
          ["all", "All"],
          ["active", "Active"],
          ["completed", "Completed"],
        ].map(([value, label]) => (
          <button
            key={value}
            className={`pill ${filter === value ? "active" : ""}`}
            onClick={() => setFilter(value)}
            type="button"
          >
            {label}
          </button>
        ))}

        <button
          className="pill"
          onClick={() => dispatch({ type: "clear-completed" })}
          type="button"
        >
          Clear completed
        </button>
      </div>

      <ul className="list">
        {visibleTodos.map((todo) => (
          <li key={todo.id} className={`item ${todo.completed ? "done" : ""}`}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch({ type: "toggle", id: todo.id })}
              aria-label={`Mark ${todo.title} as done`}
            />

            <div>
              <h3>{todo.title}</h3>
              <p className="meta">
                Priority: {todo.priority} • {new Date(todo.createdAt).toLocaleString()}
              </p>
            </div>

            <div className="actions">
              <button
                onClick={() => dispatch({ type: "remove", id: todo.id })}
                type="button"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <footer className="stats">
        <span>Total: {stats.total}</span>
        <span>Completed: {stats.done}</span>
        <span>Left: {stats.left}</span>
      </footer>
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TodoApp />);
