import { useState } from "react";
import TaskEdit from "./TaskEdit";
import './TaskItem.css';
function TaskItem({task,onDelete,onEdit,onDone}){
    const handleDelete = () =>{
        onDelete(task.id);
    }
    const handleEdit = () =>{
        setShowEdit(!showEdit);
    }
    const handleSubmit = (id,newValue) =>{
        setShowEdit(!showEdit)
        onEdit(id,newValue);
    }
    let editInput = "";
    let [showEdit,setShowEdit] = useState(false);
    if(showEdit)
    {
        editInput = <TaskEdit task={task} onSubmit={handleSubmit}/>
    }

    //Function to Mark/Unmark the task as Done!!

    const handleDone = () =>{
        onDone(task.id);
    }
    return(
        <div className="taskItem-outer">
            <div className="taskItem-inner">
                <p className="task-name">{task.taskName}</p>
                <div className="buttons">
                    <button onClick={handleDone}>Done</button>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
            <div>{editInput}</div>            
        </div>
    );
}
export default TaskItem;