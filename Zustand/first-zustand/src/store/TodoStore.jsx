import {create} from 'zustand';

export const useTodoStore = create((set)=>{
    return {
        todos:[],
        addTodo: (todo) => set((state) => ({todos: [...state.todos, todo]})),
        removeTodo: (todo) => set((state) => ({todos: state.todos.filter((t) => t !== todo)})),
        clearTodos: () => set({todos: []})
    }
})