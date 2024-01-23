import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [];
const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
};
export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);



    const handleNewTodo = (todo) => {
        const action = {
            type: "[TODO] Add Todo",
            payload: todo,
        };
        dispatch(action);
    };
    const handleDelateTodo = (id) => {
        dispatch({
            type: "[TODO] Remove Todo",
            payload: id,
        });
    };
    const handleTogleTodo = (id) => {
        dispatch({
            type: "[TODO] Toggle Todo",
            payload: id,
        });
    };
    const todosCount = () => {
        return todos.length
    }
    const pendingTodosCount = () => {
        return todos.filter((todo) => !todo.done).length
    }
    return {
        todos,
        handleNewTodo,
        handleDelateTodo,
        handleTogleTodo,
        todosCount,
        pendingTodosCount
    }
}