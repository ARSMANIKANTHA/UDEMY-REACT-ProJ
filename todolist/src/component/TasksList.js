import TaskItem from './TaskItem';
import './TasksList.css';
function TasksList({tasksList}){
    let taskMap = tasksList.map((x,index) => {
        return (
            <div  className='task-outer'>
                <TaskItem key={index} task={x}/>
            </div>
        );
    })
    return (
        <div>
            {taskMap}
        </div>
    );
}
export default TasksList;