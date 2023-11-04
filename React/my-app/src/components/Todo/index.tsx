import React from 'react';
import TodoItem from './TodoItems';
import "./style.css";
import { title } from 'process';

interface myTodo{
    id : number;
    title : string;
}
interface Items{
    item : myTodo [];
}
const Todo : React.FC <Items>= (props) => {
  return (
    <div className='todo-container'>
        <ol>
            {
                props.item.map((item)=>(<TodoItem key = {item.id} title = {item.title}/>)
                //Warning: Each child in a list should have a unique "key" prop.
                //We have to specify the built-in key property with dynamic objects in order to avoid this warning
                //This key has to be unique
            )}
        </ol>
    </div>
  )
}

export default Todo;