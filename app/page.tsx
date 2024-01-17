import Add from './components/add';
import List from './components/list';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Add/>
      <List/>
    </main>
  )
}
