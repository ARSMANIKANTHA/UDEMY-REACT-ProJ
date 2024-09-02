import {useState} from 'react';
import './TaskBar.css';
function TaskBar ({addTask}){
    const [task,setTask] = useState('');
    const onTaskChange = (event) =>{
        setTask(event.target.value);
    }
    const onTaskSubmit=(event) =>{
        event.preventDefault();
        if(!task){
            alert("Empty task");
            return;
        }
        addTask(task);
        setTask('');
    }
    return (
        <div className='taskBar-outer'>
            <label><h2>TO-DO-LIST</h2></label>
            <form onSubmit={onTaskSubmit}>
                <input className='input' autoFocus value={task} onChange={onTaskChange} placeholder="Enter Task..!" />
                <button>Add</button>
            </form>
        </div>
    );
}   
export default TaskBar;