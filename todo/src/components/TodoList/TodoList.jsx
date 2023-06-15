import { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 123,
      text: '장보기',
      status: 'active',
    },
    {
      id: 124,
      text: '공부하기',
      status: 'active',
    },
  ]);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
