import React , {useState , useEffect} from 'react'
import {useDispatch} from 'react-redux';
import '../Style/main.css'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import UpdateRoundedIcon from '@material-ui/icons/UpdateRounded';
import BackspaceTwoToneIcon from '@material-ui/icons/BackspaceTwoTone';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import { deleteTodo, updateTodo } from '../redux/actionCreators'
function TodoItem({todo}) {
    // const [todoID, settodoID] = useState()
    const [update, setupdate] = useState(false)
    const [Deleted , setDelete] = useState(false)
    // const [DataName, setDataName] = useState('')
    const [name, setname] = useState()
    const dispatch = useDispatch()
    const updateDispatch = useDispatch();
    useEffect(() => {
        setname(todo.name)
    }, [todo.name])
    // const handleTodo = () => {
    //     settodoID(todo.id)
    //      const localStorageData = JSON.parse(localStorage.getItem('todos'));
    //      localStorageData.forEach(data => {
    //             if(data.id === todo.id)
    //             {
    //                 console.log('7lwayat');
    //                 console.log(data.id);
    //                 console.log(data.name);
    //                 setDataName(data.name)
    //                 console.log();
    //             }
    //         });
    //      console.log(localStorageData);
    // }
    return (
        <div>
            <div className="row m-4">
                <div className="d-flex justify-content-between main-father">
                    {Deleted 
                    ?
                    <div className="col d-flex parag"><del>{todo.name}</del></div>
                    : 
                    <div className="col d-flex parag">{update ? <input type="text" className="form-control" value={name} onChange={(e)=>setname(e.target.value)}/> : <p>{ todo.name}</p>} </div>
                    }
                <div className="d-flex" style={{marginLeft:"10px"}}>
                    <div>
                        {Deleted 
                        ?   
                        <div>
                            <BackspaceTwoToneIcon/>
                        </div>
                        :
                        <div>
                            {update ?
                                <UpdateRoundedIcon className="UpdateRoundedIcon col mx-2"
                                    onClick={ () => {
                                        updateDispatch(updateTodo({
                                            ...todo,
                                            name : name
                                        }));
                                        // if (update)
                                        // {
                                        //     setname(todo.name)
                                        // }
                                        setupdate(!update)
                                        
                                    }}
                                />
                                : 
                                <EditRoundedIcon className="EditRoundedIcon col mx-2"
                                    onClick={ () => {setupdate(!update)}}/>
                            }
                        </div>
                        }
                    </div>
                    <DeleteRoundedIcon className="DeleteRoundedIcon col mx-2"
                        onClick={()=>dispatch(deleteTodo(todo.id))}
                        // onClick = {() => {
                        //     setDelete(!Deleted)
                        // }}
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoItem
