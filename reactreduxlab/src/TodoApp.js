import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from './store'; // Assuming store.js is in the same directory

const TodoApp = () => {
  const todos = useSelector(state => state); // Get the todos state
  const dispatch = useDispatch();
  const inputRef = React.useRef(null);

  const handleAddTodo = () => {
    const todoText = inputRef.current.value.trim();
    if (todoText) {
      dispatch(addTodo(todoText));
      inputRef.current.value = '';
    }
  };

  return (
    <div>
      <input ref={inputRef} id="todo-input" type="text" />
      <button onClick={handleAddTodo} id="add-btn">Add Todo</button>

      <ul id="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className="todo-item">
            <span>{todo.text}</span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
