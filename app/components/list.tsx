import React from 'react';
import Row from './row';
import {useTodo} from '../lib/TodoContext'

export default function List() {
  const { state } = useTodo();
  return (
    <div>
        <h2>To do List</h2>
        {
          state.todos.map((todo : {'id':string, 'name':string})=>(
            <li key={todo.id}>
              {todo.name}
              <Row/>
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
