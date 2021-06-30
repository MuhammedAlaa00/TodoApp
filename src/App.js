import './App.css';
import React ,  {useState} from 'react'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import 'bootstrap/dist/css/bootstrap.css'
import {Provider} from 'react-redux'
import Store from './redux/Store'
import Paper from '@material-ui/core/Paper';
import { withStyles , makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import Modal from '@material-ui/core/Modal';
const date = new Date();
const Month = date.getMonth() + 1
const Day = date.getDate()
const Year = date.getFullYear()
console.log(Month);
const LightTooltip = withStyles((theme) => ({
  arrow: {
    "&::before": {
      backgroundColor: "#ad1457",
    }
  },
  tooltip: {
    backgroundColor: "#ad1457",
    color: '#fff',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(55),
      height: theme.spacing(55),
    },
  },
  Paper : {
    backgroundColor : "#00291a",
    color:"#fff",
    boxShadow:"0px 3px 3px -2px #031211, 0px 3px 4px 0px #031211, 0px 0px 8px 0px #031211",
    overflowY : "auto"
    //031211
  },
  AddBtn : {
    width: theme.spacing(55),
    bottom: "90px",
    position: "absolute",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center"
  }, 
  button: {
    position: "absolute",
    bottom : "-20px",
    textTransform : "capitalize",
    backgroundColor:"#ad1457",
    color:"#fff",
    '&:hover':{
      backgroundColor:"#fff",
      color:"#ad1457",
    }
  },
}));
function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
  };
}
function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    console.log('closed');
  };
document.addEventListener('click' , function(e){
  if (e.target.matches ('.modalBody'))
  {
    handleClose()
  }
})
const body = (
  <div style={modalStyle} className="modalBody">
    <div className="childBody">
      <TodoInput handleClose={() => handleClose()}></TodoInput>
    </div>
  </div>
);
  return (
    <Provider store={Store}>
        <div className="App">
        <div className={classes.root}>
          <Paper elevation={3}  className={`paper ${classes.Paper}`}>
            <div className="date mt-3 mb-3">{Day} - {Month > 12 ? "1" : Month } - {Year}</div>
            <h2>All Tasks</h2>
            <TodoList></TodoList>
          </Paper>
        </div>
        <div className={`${classes.AddBtn} AddBtn`}>
            <LightTooltip TransitionComponent={Zoom} title="Add" arrow>
              <Button
                variant="contained"
                onClick={handleOpen}
                size="large"
                className={classes.button}
                startIcon={<AddIcon />}
              >
                New Task
              </Button>
            </LightTooltip>
        </div>
        <Modal
        open={open}
        onClose={handleClose} 
      >
      {body}
      </Modal>
          {/* <div className="container">
            <TodoInput></TodoInput>
            <TodoList></TodoList>
          </div> */}
      </div>
    </Provider>
  );
}

export default App;
