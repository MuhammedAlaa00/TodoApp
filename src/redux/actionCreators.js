import {ADD_TODO , DELETE_TODO , UPDATE_TODO} from './actions'
export const addTodo = todo => { 
    return{
        type:ADD_TODO,
        payload: todo
    }
}
export const deleteTodo = todoId => { 
    return{
        type:DELETE_TODO,
        payload: todoId
    }
}
export const updateTodo = todo => { 
    return{
        type:UPDATE_TODO,
        payload: todo
    }
}