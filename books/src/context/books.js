import {createContext,useState} from 'react';
import axios from 'axios';
const BooksContext = createContext();

function Provider({children}){
    //Fetch Books
    const [books,setBooks] = useState([]);
    const fetchBooks =async () =>{
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    }
    //Create Book
    const createBook = async (title) =>{
        const response = await axios.post('http://localhost:3001/books',{
            title,
        });

        const updatedBooks = [...books,response.data];
        setBooks(updatedBooks);
    };
    //Delete Book
    const deleteBookById = async (id) =>{
        await axios.delete(`http://localhost:3001/books/${id}`);
        const updatedBooks = books.filter((book) => book.id!==id);
        setBooks(updatedBooks);
    };
    //Edit Book
    const editBookById = async (id,title) =>{
        const response = await axios.put(`http://localhost:3001/books/${id}`,{title,});
        const updatedBooks = books.map((book) =>{
            if(book.id===id){
                return {...book,...response.data};
            }
            return book;
        });
        setBooks(updatedBooks);
    };

    //Object to share across all the remaining components which holds the references of all the functions
    const valueToShare = {
        books,
        fetchBooks,
        createBook,
        editBookById,
        deleteBookById
    }
    return (
        <BooksContext.Provider value={valueToShare}>{children}</BooksContext.Provider>
    );
}

export default BooksContext;
export {Provider};