import Movie from './components/Movie';
import './App.css';
import React,{useEffect,useState} from 'react';

const FEATURED_API ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=161930799febb424eac0d5c585c96bbf&page=1";

//const IMG_API="https://image.tmdb.org/t/p/w1280";
const SEARCH_API="https://api.themoviedb.org/3/search/movie?&api_key=161930799febb424eac0d5c585c96bbf&query="


function App() {
  const [movies,setmovies]=useState([]);
  const[searchTerm,setSearchTerm] =useState("");
  useEffect(()=>{
    fetch(FEATURED_API).then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      setmovies(data.results);
    });
  },[]);
  const handleOnSubmit=(e)=>{
    e.preventDefault();
    if(searchTerm){
    fetch(SEARCH_API + searchTerm).then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      setmovies(data.results);
    });
  setSearchTerm('');
  }
  }
  const handleOnChange=(e)=>{
    setSearchTerm(e.target.value);


  }
  const handle=()=>{
    fetch(FEATURED_API).then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      setmovies(data.results);
    });

  }
  return (
    <>
    <header>
      <button onClick={handle}> 
<img src="./w.png" alt= ' '/>

      </button>
      
      <form onSubmit={handleOnSubmit}>
    <input  className="search" type="search" placeholder="Search..."
    value={searchTerm} onChange={handleOnChange}
    />
     </form>
    
     </header>
    

    <div className="movie-container">
  
    { movies.length>0 && movies.map( (movie) =>
       <Movie key={movie.id} {...movie}/>
     )}
    </div>
</>
  );
}

export default App;
