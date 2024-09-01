import { useState } from "react";
import TaskBar from "./component/TaskBar";
import TasksList from "./component/TasksList";

function App(){
    const [tasks,setTasks]= useState([]);
    function addTask(newTask){
        if(tasks.includes(newTask)){
            alert("Task already added!!")
            return;
        }
        const updatedTasks = [...tasks,newTask];
        setTasks(updatedTasks);
    }
    return <div>
        <TaskBar addTask={addTask} />
        <TasksList tasksList = {tasks} />
    </div>;
}

export default App;