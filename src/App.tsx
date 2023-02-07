import NewTodo from './components/NewTodo'
import TodoFilter from './components/TodoFilter'
import TodoList from './components/TodoList'

function App() {
  return (
    <section className="py-10">
      <div className="container space-y-10">
        <h1 className="text-2xl">Zustand todo:</h1>

        <TodoList />

        <NewTodo />

        <TodoFilter />
      </div>
    </section>
  )
}

export default App
