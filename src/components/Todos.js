import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TodoView from './TodoView';

export default function Todos() {
  const [localData, setLocalData] = useState([]);
  const todos = useSelector((state) => state.todos);
  const storage = localStorage.getItem("add-to-do-text");

  useEffect(() => {
  
    setLocalData(JSON.parse(storage) ? JSON.parse(storage) : todos)
    
  }, [todos])


  return (
    <div>
      <ul>
        
        {
          localData.map((todo) => (
            <li key={todo.id}>
              <TodoView todo={todo} />
            </li>
          ))
        }
      </ul>
    </div>
  );
}
