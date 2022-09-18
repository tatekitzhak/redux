import React from "react";
import {useState} from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from '@/store/features/todos/todosSlice';
import NewTodoForm from '@/components/NewTodoForm';
import TodoList from '@/components/TodoList';



function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAction = () => {
    if(text.trim().length) {
      dispatch(addTodo({text}));
      setText('');
    }
  }

  return (
    <div className='App'>
      <NewTodoForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
      <TodoList />
    </div>
  );
}

export default App;
