import {useState} from 'react';
import './TaskEdit.css';
function TaskEdit({task,onSubmit}){
    const [newValue,setnewValue] = useState('');
    const handleChange = (event) =>{
        setnewValue(event.target.value);
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        onSubmit(task.id,newValue);
    }
    return (
        <div className='edit-outer'>
            <form onSubmit={handleSubmit}>
                <input placeholder='Edit Here..' onChange={handleChange} autoFocus/>
                <button>Save</button>
            </form>
        </div>
    );
}

export default TaskEdit;