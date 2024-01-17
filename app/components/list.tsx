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
            
              <Row todo={todo} key={todo.id}/>
          )
          )
        }
       
    </div>
  )
}
