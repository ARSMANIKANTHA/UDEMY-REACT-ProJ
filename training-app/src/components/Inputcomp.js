import './Inputcomp.css';
export default function Inputcomp(){
    return (
        <div className = "taskInput">
            <input type="text" required  placeholder="Enter Task Info"/>
            <button  >Add...!</button>
        </div>
    );
}