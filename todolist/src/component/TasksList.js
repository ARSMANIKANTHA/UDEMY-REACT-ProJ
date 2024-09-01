import TaskItem from './TaskItem';
import './TasksList.css';
function TasksList({tasksList,onDelete,onEdit}){
    let renderedTasks = tasksList.map((x) => {
        return (
                <TaskItem key={x.taskId} task={x} onDelete={onDelete} onEdit={onEdit}/>
        );
    })
    return (
        <div className='outer-taskslist'>
            {renderedTasks}
        </div>
    );
}
export default TasksList;