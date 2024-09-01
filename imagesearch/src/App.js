import './App.css';
import Searchbar from './components/Searchbar';
import { useState } from 'react';
import SearchImages from './api';
import Imagelist from './components/Imagelist';
function App() {
  const [images,setImages]=useState([]);
  const getTerm= async (term)=>{
    let result = await SearchImages(term);
    setImages(result);  
  }
  return (
    <div>
      <Searchbar onSubmit={getTerm}/>
      <Imagelist allImages={images}/>
    </div>
  );
}

export default App;
