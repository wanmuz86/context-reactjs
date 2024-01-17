"use client"
import Add from './components/add';
import List from './components/list';
import {TodoProvider} from './lib/TodoContext'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TodoProvider>
        <Add/>
        <List/>
      </TodoProvider>
    </main>
  )
}
