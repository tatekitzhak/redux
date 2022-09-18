import React from "react";
import { useSelector } from 'react-redux';
import TodoItem from '@/components/TodoItem';

function TodoList(params) {
  const todos = useSelector(state => state.todos.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
        />
      ))}
    </ul>
  );
  
}

export default TodoList;
