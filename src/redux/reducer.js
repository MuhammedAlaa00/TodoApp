import {ADD_TODO , DELETE_TODO , UPDATE_TODO} from './actions'
let todos = []
const initalState = todos;
const Reducer = (state = initalState,action) => {
    let newTodoList = [...state];
    switch (action.type) {
        case ADD_TODO:
            newTodoList.push(action.payload);
            return newTodoList
        case DELETE_TODO :
            newTodoList = newTodoList.filter(todo => todo.id !== action.payload);
            return newTodoList
        case UPDATE_TODO : 
            let index = -1;
            for(let i = 0; i <= newTodoList.length; i++)
            {
                index++;

                if(newTodoList[i].id === action.payload.id)
                {
                    break;
                }
            }

            if(index !== -1)
            {
                newTodoList[index] = action.payload
                return newTodoList
            }
        break;    
        default:
            return state;
    }
}
export default Reducer