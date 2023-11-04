import React, { useState } from "react";
import Todo from "./components/Todo";
import Counter from "./components/Counter";

const myTodoItems = [
    {
        id : 1,
        title : 'Eat'
    },
    {
        id : 2,
        title : 'Sleep'
    },
    {
        id : 3,
        title : 'Code'
    },
    {
        id : 4,
        title : 'Repeat'
    }
]
const App : React.FC = () => {
    const [state,updateState] = useState<boolean>(false);
    return (
        <div>
            <Todo item = {myTodoItems}/>
            <div>
                <button onClick={(e)=>{updateState(!state)}}>Toggle Counter</button>
                {state ? <Counter/> : ""}
            </div>
        </div>
    )
}

export default App;