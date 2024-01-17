"use client"
import React,{ChangeEvent, FormEvent, useState} from 'react'

export default function Add() {
    const [todo, setTodo] = useState('');
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value)
    }
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(todo);
    }


  return (
    <div>
        <h2>Add new Todo</h2>
        <form onSubmit={handleSubmit}>
        <input type="text" name='todo' value={todo} onChange={handleChange}/>
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
