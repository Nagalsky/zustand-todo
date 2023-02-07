import { nanoid } from "nanoid";
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export type TodoItem = {
  id: string;
  title: string;
  completed: boolean;
};

export interface TodosState {
  todos: TodoItem[];
  isLoading: boolean;
  error: string | null;
  hideCompleted: boolean;
  filter: string;
  fetchTodos: () => void;
  addTodo: (title: string) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
  setFilter: (filter: string) => void;
}

export const useTodosStore = create<TodosState>()(
  persist(
    devtools((set, get) => ({
      todos: [],
      isLoading: false,
      error: null,
      hideCompleted: false,
      filter: 'all',

      fetchTodos: async () => {
        set({ isLoading: true })

        try {
          const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')

          if (!res.ok) throw new Error('Failed to fetch! Try again.')

          set({ todos: await res.json() })
        } catch (error: any) {
          set({ error: error.message })
        } finally {
          set({ isLoading: false })
        }
      },
      addTodo: (title: string) => {
        const newTodo = { id: nanoid(), title, completed: false }

        set({ todos: [...get().todos, newTodo] })
      },

      removeTodo: (id: string) => set((state) => ({ todos: state.todos.filter((it) => it.id !== id) })),

      toggleTodo: (id: string) => set({
        todos: get().todos.map(
          todo => id === todo.id
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      }),

      setFilter: (value: string) => set({ filter: value })
    })),
    { name: "todosStore" }
  )
);
