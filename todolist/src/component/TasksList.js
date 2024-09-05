import TaskItem from './TaskItem';
import './TasksList.css';
function TasksList({tasksList,onDelete,onEdit,onDone}){
    let tempList = tasksList.sort((a,b)=> {return (a.taskDone === b.taskDone)? 0 : a.taskDone ? 1 : -1});
    console.log(tempList)
    let renderedTasks = tasksList.sort((a,b)=> a.taskName.length-b.taskName.length).map((x) => {
        return (
                <TaskItem key={x.taskId} task={x} onDelete={onDelete} onEdit={onEdit} onDone={onDone}/>
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