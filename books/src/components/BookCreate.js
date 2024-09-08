import { useContext, useState } from "react";
import BooksContext from "../context/books";

function BookCreate(){
    const {createBook} = useContext(BooksContext);
    const [bookTitle,setBookTitle] = useState('');
    const handleBookName=(event)=>{
        setBookTitle(event.target.value);
    }
    const addBook=(event)=>{
        event.preventDefault();
        createBook (bookTitle);
        setBookTitle('');
    }
    return (
        <div className="book-create">
            <form onSubmit={addBook}>
                <h5>Book Title : </h5>
                <input  className="input" value={bookTitle} placeholder="Book title.." onChange={handleBookName} autoFocus/>
                <button className="button">Add Book!!</button>
            </form>
        </div>
    );
}

export default BookCreate;