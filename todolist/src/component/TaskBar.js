import {useState} from 'react';
import './TaskBar.css';
function TaskBar ({addTask}){
    const [task,setTask] = useState('');
    const onTaskChange = (event) =>{
        setTask(event.target.value);
    }
    const onTaskSubmit=(event) =>{
        event.preventDefault();
        addTask(task);
        setTask('');
    }
    return (
        <div className='taskBar-outer'>
            <form onSubmit={onTaskSubmit}>
                <label><h2>Enter your task</h2></label>
                <input className='input' autoFocus value={task} onChange={onTaskChange} placeholder="Enter Task..!" />
            </form>
        </div>
    );
}   
export default TaskBar;