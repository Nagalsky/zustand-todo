import { useState } from 'react'
import { useTodosStore } from '../../store/useTodosStore'

export default function NewTodo() {
  const [newItem, setNewItem] = useState('')
  const addTodo = useTodosStore((state) => state.addTodo)

  const handleAddTodo = () => {
    if (!newItem) {
      return
    }
    addTodo(newItem)
    setNewItem('')
  }

  return (
    <div className="flex gap-4 mt-8">
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Add new todo item"
        onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()}
        onChange={(e) => setNewItem(e.currentTarget.value.trimStart())}
        value={newItem}
      />
      <button
        className="shrink-0 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 disabled:opacity-40 disabled:cursor-not-allowed"
        onClick={() => handleAddTodo()}
        disabled={!newItem}
      >
        Add new todo
      </button>
    </div>
  )
}
