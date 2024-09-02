import TaskItem from './TaskItem';
import './TasksList.css';
function TasksList({tasksList,onDelete,onEdit}){
    let renderedTasks = tasksList.map((x) => {
        return (
                <TaskItem key={x.taskId} task={x} onDelete={onDelete} onEdit={onEdit}/>
        );
    })
    let notask;
    if(renderedTasks<1){
        notask = <p>No Tasks Added...!</p>;
    }
    return (
        <div className='outer-taskslist'>
            {notask}
            {renderedTasks}
        </div>
    );
}
export default TasksList;