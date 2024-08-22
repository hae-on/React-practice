import { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [text, setText] = useState('');
  const [isChecked, setIsChecked] = useState<boolean[]>([]);

  const addTodo = () => {
    if (text) {
      setTodos([...todos, text]);
      setIsChecked([...isChecked, false]);
      setText('');
    }
  };

  const toggleTodo = (index: number) => {
    return setIsChecked(
      isChecked.map((checked, i) => (i === index ? !checked : checked))
    );
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
    setIsChecked(isChecked.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='할 일을 작성해주세요'
      />
      <button onClick={addTodo}>제출</button>
      <ul style={{ listStyle: 'none' }}>
        {todos.map((todo, index) => (
          <div style={{ display: 'flex' }}>
            <input
              checked={isChecked[index]}
              type='checkbox'
              onChange={() => toggleTodo(index)}
            />
            {isChecked[index] ? (
              <li style={{ color: 'blue' }}>{todo}</li>
            ) : (
              <li>{todo}</li>
            )}
            <button onClick={() => removeTodo(index)}>삭제</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
