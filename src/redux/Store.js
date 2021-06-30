import {createStore} from 'redux'
import Reducer from './reducer';
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('todos')
    if (serializedState === null){
            console.log("there is no data");
            return undefined
        }
        return JSON.parse(serializedState)
    }
    catch (err) {
        return undefined
    }
}
const SaveState = (state) => {
    try {
        console.log('saveState...');
        const serializedState = JSON.stringify(state)
        localStorage.setItem('todos' , serializedState)
    }
    catch(err){
        throw new Error("Can't save changes in local storage");
    }
}
const LocalStore = loadState()
const Store = createStore(Reducer,LocalStore)
Store.subscribe(() => {
    SaveState(Store.getState())
})
console.log();
export default Store