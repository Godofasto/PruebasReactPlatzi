import logo from './platzi.webp';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  {text: 'Hacer cosa 1', completed: true},
  {text: 'Hacer cosa 2', completed: false},
  {text: 'Hacer cosa 3', completed: true},
];

function App() {
  return (
    <>

      <TodoCounter completed = {12} total = {33}/>
      <TodoSearch/>

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text = {todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton/>

      </ >
  );
}




export default App;
