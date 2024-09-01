import './Searchbar.css';
import {useState} from 'react';
function Searchbar({onSubmit}){
    const [term,setTerm] = useState('');
    function setNewValue(event){
        setTerm(event.target.value);
    }
    function sendValue (event){
        event.preventDefault();
        onSubmit(term);
    }
    return (
        <form onSubmit={sendValue} className='form-outer'> 
            <label>Enter your search term : </label>
            <input type={term} onChange={setNewValue} placeholder='Text here...' /> 
        </form>
    );
}
export default Searchbar;