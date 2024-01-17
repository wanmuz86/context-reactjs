import React from 'react';
import Row from './row';
import {useTodo} from '../lib/TodoContext'

export default function List() {
  const { state } = useTodo();
  return (
    <div>
        <h2>To do List</h2>
        {
          state.todos.map(todo=>(
            <li key={todo.id}>
              {todo.text}
            </li>
          )
          )
        }
        {/* <ul>
            <li><Row/></li>
            <li><Row/></li>
            <li><Row/></li>
        </ul> */}
    </div>
  )
}
