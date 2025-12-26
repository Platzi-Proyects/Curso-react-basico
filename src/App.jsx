import './App.css'
import TotalCounter from "./components/TotalCounter.jsx";
import {useState} from "react";
import ItemsToDo from "./components/ItemsToDo.jsx";
import ToDo from "./components/ToDo.jsx";
import Search from "./components/Search.jsx";




function App() {
    const [searchValue, setSearchValue] = useState('')

    const [ar, setAr] = useState([
        {id:1, title:"ADASDASD", completed:true},
        {id:2, title:"gGG", completed:true},
        {id:3, title:"3334", completed:true},
        {id:4, title:"111", completed:true},
        {id:5, title:"NUEVO", completed:false},

    ])



    const total = ar.length
    const totalCompleted = ar.filter(e => e.completed).length

    return (
        <main>
            <TotalCounter
                total={total}
                totalCompleted={totalCompleted}
            />
            <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
            <ItemsToDo>
                {ar.map(todo => (
                    <ToDo
                        key={todo.title}
                        text={todo.title}
                    />
                ))}
            </ItemsToDo>
        </main>
    )
}

export default App;

