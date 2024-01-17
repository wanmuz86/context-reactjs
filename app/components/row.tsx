import React from 'react'

interface RowProp {
  todo: {id:string, name:string}
}

const Row:React.FC<RowProp> = ({todo}) => {
  return (
    <div>
        <h3>{todo.name}</h3>
        <button>Remove</button>
    </div>
  )
}
export default Row;