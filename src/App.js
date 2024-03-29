import React, { useEffect, useState } from "react"
import "./App.css"
import SearchIcon from "./search.svg"
import MovieCard from "./MovieCard"


const API_URL = 'https://www.omdbapi.com/?apikey=bc1d6974'

const movie1 = {
  "Title": "The Amazing Spiderman T4 Premiere Special",
  "Year": "2012",
  "imdbID": "tt2233044",
  "Type": "movie",
  "Poster": "N/A"
}


const App =()=>{

  const [movies, setMovies] = useState([])
  const [searchTerm, setSerchTerm] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL} &s=${title}`)
    const data= await response.json()

    setMovies(data.Search)
  }
 
  useEffect(()=>{
      searchMovies('Spiderman')
  },[])

  return(  
 <div className="app"> 
    <h1>Movie Finder</h1>

    <div className="search"> 
      <input 
        placeholder="Enter movie here..."
        value= {searchTerm}
        onChange= {(e)=> setSerchTerm(e.target.value)} //..e refers to the callBack function
     />
      <img 
        src={SearchIcon}
        alt= "search"
        onClick={()=>searchMovies(searchTerm)}
      />
    </div>

    {
      movies?.length > 0 
      ? (
        <div className="container"> 
          { movies.map((movie) =>(
            <MovieCard movie={movie}/>
          ))}
          </div>
      ) : (
        <div className="empty">
          <h2>No movie found </h2>
          </div>
      )
    }  
 </div>
  )
}
export default App