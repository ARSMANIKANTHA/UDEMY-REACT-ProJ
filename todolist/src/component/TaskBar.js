import {useState} from 'react';
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
        <div>
            <form onSubmit={onTaskSubmit}>
                <label><h4>Enter your task:</h4></label>
                <input autoFocus value={task} onChange={onTaskChange} style={{
                    height:"25px",
                    border:"1px solid blue",
                    borderRadius:"0.7rem",
                    padding:"0 0.5rem",
                    outlineStyle:"none"
                }} placeholder="Enter Task..!" />
            </form>
        </div>
    );
}   
export default TaskBar;