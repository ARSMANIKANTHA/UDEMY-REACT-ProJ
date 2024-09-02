import { useState } from "react";
import TaskBar from "./component/TaskBar";
import TasksList from "./component/TasksList";
import './App.css';
function App(){
    const [tasks,setTasks]= useState([]);
    function addTask(newTask){
        
        const updatedTasks = [...tasks,
        {
            taskId:tasks.length+100,
            taskName:newTask
        }
        ];
        setTasks(updatedTasks);
    }
    const onDelete=(taskId)=>{
        const updatedTasks = tasks.filter((task)=>{
            return task.taskId!==taskId;
        })
        setTasks(updatedTasks);
    }
    const onEdit= (taskId,newTaskName) =>{
        const updatedTasks = tasks.map((task)=>{
            if(task.taskId === taskId ){
                return {
                    ...task,
                    taskName:newTaskName
                }
            }
            return task;
        })
        setTasks(updatedTasks);
    }
    return <div className="outer-app" >
        <TaskBar addTask={addTask} />
        <TasksList tasksList = {tasks} onDelete={onDelete} onEdit={onEdit}/>
    </div>;
}

export default App;