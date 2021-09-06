import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Newitem } from './Newitem';
import { TodoItem } from './TodoItem';

export const Todolist = () => {
    const todos = useSelector(state => state.todo.todolist);
    console.log(todos);
    const [isDone, setisDone] = useState(false);
const handledone = () => {
     setisDone(!isDone);
};
    return (
        <div className='todo_list'>
            <Newitem/>
            <button onClick={handledone}>
                {isDone ? "show undone" : "show done"}
                </button>
           { todos.filter((item)=> item.isDone ===isDone)
           .map((item)=>(
           <TodoItem item={item}/>
           ))}
        </div>
    );
};
