class TodoApp {
  constructor() {
      this.todos = [];
      this.todoInput = document.getElementById('todo-input');
      this.todoList = document.getElementById('todo-list');
      this.addButton = document.getElementById('add-btn');

      this.addButton.addEventListener('click', () => this.addTodo());
      this.todoInput.addEventListener('keypress', (event) => {
          if (event.key === 'Enter') this.addTodo();
      });
  }

  addTodo() {
      const todoText = this.todoInput.value.trim();
      if (todoText) {
          const todo = {
              id: Date.now(),
              text: todoText
          };
          this.todos.push(todo);
          this.renderTodoList();
          this.todoInput.value = '';
      }
  }

  removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
      this.renderTodoList();
  }

  renderTodoList() {
      this.todoList.innerHTML = '';
      this.todos.forEach(todo => {
          const li = document.createElement('li');
          li.className = 'todo-item';
          li.innerHTML = `
              <span>${todo.text}</span>
              <button onclick="app.removeTodo(${todo.id})">Delete</button>
          `;
          this.todoList.appendChild(li);
      });
  }
}

const app = new TodoApp();

//React version
/*
Functional component: Replace the class with a function for a more modern React approach.
useState hook: Manages the todos array and provides the setTodos function to update it.

useRef hook: Gets a reference to the input element so we can read its value and clear it after adding a todo.
useEffect hook: Replaces the constructor logic. It focuses the input field when the component initially renders (empty dependency array ensures it runs once).

JSX: The HTML-like syntax is used to define the structure of the component.

Event handling: Inline event handlers like onClick and onKeyPress are used for conciseness.

No direct DOM manipulation: React handles updating the UI based on state changes, so we don't need to manually manipulate DOM elements like in the original class-based version.
Key prop: Added key to each list item for better performance and React's list reconciliation.

Export default: The component is exported to be used in your main application. 
*/
/*

import React, { useState, useRef, useEffect } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const todoInputRef = useRef(null);

  useEffect(() => {
    // Focus the input when the component loads (similar to class constructor)
    todoInputRef.current.focus();
  }, []);

  const addTodo = () => {
    const todoText = todoInputRef.current.value.trim();
    if (todoText) {
      setTodos([
        ...todos,
        { id: Date.now(), text: todoText }
      ]);
      todoInputRef.current.value = '';
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <input 
        id="todo-input" 
        ref={todoInputRef} 
        onKeyPress={(e) => e.key === 'Enter' && addTodo()} 
      />
      <button id="add-btn" onClick={addTodo}>Add</button>

      <ul id="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className="todo-item">
            <span>{todo.text}</span>
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
*/