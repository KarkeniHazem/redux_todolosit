import React from 'react'
import { useDispatch } from 'react-redux'
import { Deletetask, isDonetask } from '../Redux/Slices/TodoSlice'
import { EditModal } from './EditModal'

export const TodoItem = ({ item}) => {
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(Deletetask({id:item.id}))}
        const handleDone = () => {
            dispatch(isDonetask({id:item.id}))}
    return (
        <div className="todo_item">
           <h1> {item.title}</h1>
           <p> {item.description}</p>
           <p> {item.isDone ? "done" : "not done"}</p>
           <button className='btn btn-danger' onClick={handleDelete} >Delete</button>
           <EditModal  item={item} />
           <button className='btn btn-danger' onClick={handleDone} >Done{""}</button>

        </div>
    )
}
