import { useTodosStore } from '../../store/useTodosStore'

export default function TodoFilter() {
  const filter = useTodosStore((state) => state.filter)
  const setFilter = useTodosStore((state) => state.setFilter)
  const todos = useTodosStore((state) => state.todos)
  return (
    <>
      {todos.length ? (
        <div className="flex flex-wrap gap-6">
          <button
            className="shrink-0 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 disabled:opacity-40 disabled:cursor-not-allowed"
            disabled={filter === 'all'}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className="shrink-0 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 disabled:opacity-40 disabled:cursor-not-allowed"
            disabled={filter === 'uncompleted'}
            onClick={() => setFilter('uncompleted')}
          >
            Not completed
          </button>
          <button
            className="shrink-0 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 disabled:opacity-40 disabled:cursor-not-allowed"
            disabled={filter === 'completed'}
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
        </div>
      ) : null}
    </>
  )
}
