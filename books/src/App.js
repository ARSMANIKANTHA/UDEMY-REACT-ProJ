import {useState} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
function App(){
    const [books,setBooks] = useState([]);
    const createBook = (title) =>{
        const updatedBooks = [...books,{
            id:Math.round(Math.random()*9999),
            title
        }]
        setBooks(updatedBooks);
    };
    const deleteBookById = (id) =>{
        const updatedBooks = books.filter((book) => book.id!==id);
        setBooks(updatedBooks);
    };
    const editBookById = (id,title) =>{
        const updatedBooks = books.map((book) =>{
            if(book.id===id){
                return {...book,title};
            }
            return book;
        });
        setBooks(updatedBooks);
    };
    return (
        <div className='app'>
            <h1>Reading books</h1>
            <BookList books={books} onDelete = {deleteBookById} onEdit={editBookById}/>
            <BookCreate onSubmit={createBook} />
        </div>
    );
}
export default App;