import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todolist: [
    {
     id: Math.random(),
     title: "todo item 1",
     description: "description todo item 1",
     isDone: false,
    },
    {
        id: Math.random(),
        title: "todo item 2",
        description: "description todo item 2",
        isDone: false,
       },
       {
        id: Math.random(),
        title: "todo item 3",
        description: "description todo item 3",
        isDone: true,
       },
],
  
};

export const TodoSlice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
  Addtask: (state, action) => {
      state.todolist.push(action.payload);
    },
    Deletetask: (state, action) => {
state.todolist = state.todolist.filter(
    (el)=>el.id !== action.payload.id);

      },
      isDonetask: (state, action) => {
          let i = state.todolist.findIndex((el) => el.id === action.payload.id );
          state.todolist[i] = {...state.todolist[i], isDone: !state.todolist[i].isDone,};

      },
      Edittask: (state, action) => {
        let i = state.todolist.findIndex((el) => el.id === action.payload.id );
        state.todolist[i] = {...state.todolist[i], 
            title: action.payload.title, description: action.payload.description };
    },
  },
});

// Action creators are generated for each case reducer function
export const { Addtask,Deletetask, isDonetask, Edittask} = TodoSlice.actions

export default TodoSlice.reducer



