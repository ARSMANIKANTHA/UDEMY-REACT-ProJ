import {useEffect,useContext, useState} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
// import BooksContext from './context/books';
function App(){
    // const {fetchBooks} = useContext (BooksContext);
    // useEffect(()=>{
    //     fetchBooks();
    // },[]);
    const [count,setCount] = useState(0);
    useEffect(()=>{
        document.body.onclick =()=>{
            console.log(count);
        };
    },[]);
    return (
        <div className='app'>
            <h1>BooksList</h1>
            <BookList />
            <button onClick={()=>setCount(count+1)}>Click</button>{count}
            <BookCreate/>
        </div>
    );
}
export default App;