import React, { useState } from 'react'
import { Form,Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Addtask } from '../Redux/Slices/TodoSlice';

export const Newitem = () => {
    const [newTodo, setnewTodo] = useState({

        id: Math.random(),
        title: "",
        description: "",
        isDone: false,

    });
const dispatch = useDispatch();
const handleAdd = () => {
    dispatch(Addtask(newTodo))
} 

const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    setnewTodo({
      itemvalues: [{}]
    });
  };
    return (
        <div>
            <Form onSubmit={(e) => {
                e.preventDefault();
                handleAdd();
            }} 
            >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="Enter title" onChange={(e)=>setnewTodo({...newTodo, title : e.target.value})} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" placeholder=" description" onChange={(e)=>setnewTodo({...newTodo, description : e.target.value})} />
    </Form.Group>Enter


  <Button style={{ width: "100%"}} variant="primary" onClick={()=>{handleAdd();handleReset() }} >
    Add Todo {" "}
  </Button>
</Form>
        </div>
    )
}
