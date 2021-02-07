import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="container">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
