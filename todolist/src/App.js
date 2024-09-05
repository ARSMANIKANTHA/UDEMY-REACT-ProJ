import { useState,useEffect } from "react";
import TaskBar from "./component/TaskBar";
import TasksList from "./component/TasksList";
import axios from "axios";
import './App.css';
function App(){
    const [tasks,setTasks]= useState([]);
    useEffect(()=>{
        loadTasks()
    },[]);
    const loadTasks = async () =>{
        const response = await axios.get('http://localhost:3001/tasks');
        setTasks(response.data);
    }
    const addTask = async (newTask) =>{
        const response = await axios.post('http://localhost:3001/tasks',{
            taskName:newTask,
            taskDone:false
        });
        const updatedTasks = [...tasks,response.data];
        setTasks(updatedTasks);
    }
    const onDelete= async (id)=>{
        await axios.delete(`http://localhost:3001/tasks/${id}`);
        const updatedTasks = tasks.filter((task)=>{
            return task.id!==id;
        })
        setTasks(updatedTasks);
    }
    const onEdit=  async (id,newTaskName) =>{
        const response = await axios.put(`http://localhost:3001/tasks/${id}`,{
            taskName : newTaskName
        });
        const updatedTasks = tasks.map((task)=>{
            if(task.id === id ){
                return {
                    ...task,
                    ...response.data
                }
            }
            return task;
        })
        setTasks(updatedTasks);
    }
    //Handle Done function
    const handleDone = async (id) =>{
        const temp = await axios.get(`http://localhost:3001/tasks/${id}`);
        let isDone = temp.data.taskDone;
        const response = await axios.put(`http://localhost:3001/tasks/${id}`,
            {
                ...temp.data,
                taskDone:!isDone
            }
        );
        const updatedTasks = tasks.map((task)=>{
            if(task.id===id){
                return {
                    ...response.data
                }
            }
            return task;
        })
        setTasks(updatedTasks);
    }
    return <div className="outer-app" >
        <TaskBar addTask={addTask} />
        <TasksList tasksList = {tasks} onDelete={onDelete} onEdit={onEdit} onDone={handleDone}/>
    </div>;
}

export default App;