import BooksContext from '../context/books';
import '../index.css';
import {useContext, useState} from 'react';
function BookEdit({book,onSubmit}){
    const [title,setTitle] = useState(book.title);
    const {editBookById}=useContext(BooksContext);
    const handleChange = (event) =>{
        setTitle(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
        editBookById(book.id,title);
    }
    return <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange}/>
        <button className="buttom is-primary">Save</button>
    </form>;
}

export default BookEdit;