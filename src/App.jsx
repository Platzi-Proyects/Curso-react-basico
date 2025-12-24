import './App.css'
import TodoCounter from "./components/TodoCounter.jsx";
import TodoSearch from "./components/TodoSearch.jsx";
import ToDoList from "./components/ToDoList.jsx";
import TodoItem from "./components/TodoItem.jsx";
import CreateToDo from "./components/CreateToDo.jsx";

function App() {

  return (
    <main>
        <TodoCounter />
        <TodoSearch />

        <ToDoList>
            <TodoItem />
        </ToDoList>

        <CreateToDo />
    </main>
  )
}

export default App;
