import React from 'react'
import {useTodo} from '../lib/TodoContext'

interface RowProp {
  todo: {id:string, name:string}
}

const Row:React.FC<RowProp> = ({todo}) => {

  const {dispatch}  = useTodo();

  const handleClick = () => {
    dispatch({type:'REMOVE_TODO',payload:todo.id});
  }


  return (
    <div>
        <h3>{todo.name}</h3>
        <button onClick={handleClick}>Remove</button>
    </div>
  )
}
export default Row;