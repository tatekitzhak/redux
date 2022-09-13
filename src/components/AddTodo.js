import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../store/features/todos/todosSlice';

export default function AddTodo() {
  const [text, setText] = useState('');
  const storage = localStorage.getItem("add-to-do-text");
  const state = useSelector( state => {
    return state.todos
  })
  const dispatch = useDispatch();

  const addTodoHandler = (event) => {
    event.preventDefault();
    dispatch(addTodo(text));
    setText('');
  };


  useEffect(()=>{
    if ( state.length && !JSON.parse(storage) ) {
      localStorage.setItem("add-to-do-text", JSON.stringify(state));
      
    } else if(state.length && JSON.parse(storage)){
      const arr = JSON.parse(storage)
      
      arr.push(state[state.length-1])
      localStorage.setItem("add-to-do-text", JSON.stringify(arr));

    } else if (state.length === 0 ) {
      console.log('state.length && JSON.parse(storage):', JSON.parse(storage))
    } 
    
  },[state])

  return (
    <form onSubmit={addTodoHandler}>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>Add todo</button>
    </form>
  );
}
