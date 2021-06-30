import React, {useState} from 'react'
import { addTodo } from '../redux/actionCreators'
import {useDispatch} from 'react-redux'
import {v1 as uuid} from 'uuid';
import {makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../Style/main.css'
const useStyles = makeStyles(()=>({
    button: {
        textTransform : "capitalize",
        backgroundColor:"#ad1457",
        color:"#fff",
        '&:hover':{
          backgroundColor:"#fff",
          color:"#ad1457",
        }
      },
}));
function TodoInput({handleClose}) {
    const classes = useStyles();
    const [name, setname] = useState('')
    const [alert, setalert] = useState(false)
    const dispatch = useDispatch()
    return (
        <div className="w-100">
            {alert ? <div className="alert alert-danger" role="alert">
                Check Your Note Out..!
            </div> : <div></div>}
            <div >
                <div className="mb-4">
                    <input type="text" className="form-control col" value={name}
                        onChange={(e)=>setname(e.target.value)}
                    />
                </div>
                <div className="btnFather">
                    <Button size="large"
                        variant="contained"
                        className={classes.button}
                        onClick={()=>{
                            if (name === '' || !name){
                                setalert(true)
                                setTimeout(() => {
                                    setalert(false)
                                }, 3000);
                                console.log(alert);
                            }
                            else{
                                dispatch(addTodo({
                                    id:uuid().slice(0,5),
                                    name:name
                                }));
                                setname('');                                
                            }
                        }}
                    >Add</Button>
                    <Button size="large"
                        variant="contained"
                        className={`m-2 ${classes.button} btn`} onClick={handleClose}>Cancel</Button>
                </div>
            </div>
        </div>
    )
}

export default TodoInput
