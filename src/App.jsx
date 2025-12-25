import './App.css'
import TodoCounter from "./components/TodoCounter.jsx";
import TodoSearch from "./components/TodoSearch.jsx";
import ToDoList from "./components/ToDoList.jsx";
import TodoItem from "./components/TodoItem.jsx";
import CreateToDo from "./components/CreateToDo.jsx";

function App() {

    const all = [
        {id: 1, title: "Hacer sopas"},
        {id: 2, title: "Perros"},
        {id: 3, title: "Lovometil"}
    ]

  return (
    <main>
        <TodoCounter complete={10} total={100 } />
        <TodoSearch />

        <ToDoList>
            {all.map(i => (
                <TodoItem key={i.id} title={i.title} />
            ))}
        </ToDoList>

        <CreateToDo />
    </main>
  )
}

export default App;
