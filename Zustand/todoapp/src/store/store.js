import { create } from 'zustand';

export const useTodoStore = create((set) => ({
    todos: [],
    addToDo: (task) => {
        set((state) => ({
            todos: [...state.todos, { id: Date.now(), task, isCompleted: false }]
        }));
    },
    toggleToDo: (id) => {
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
            )
        }));
    },
    deleteToDo: (id) => {
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id)
        }));
    }
}));
