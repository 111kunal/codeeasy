import { useState,useEffect } from 'react'
import './App.css'
import imdbimg from './assets/imdb.png'

function App() {
  const [input,setInput] = useState("")
  const [value,setValue] = useState("")
  const [movies,setMovies] = useState([])
  const [Loading,setLoading] = useState(true)
  const [selectedMovie,setSelectedMovie] = useState(null)

  useEffect(()=>{
    fetch(
      `https://www.omdbapi.com/?s=${value}&apikey=63cf737a`
    )
    .then((res)=>res.json())
    .then((data)=>{
      setMovies(data.Search || [])
      setLoading(false)
    })
    .catch(()=>setLoading(false))
  },[value])
  return (
    <div className='app'>
      <div className='header'>
        <img src={imdbimg} alt="imdb logo" />

        <input type="text" className='userinput' placeholder='Enter the Name.....' onChange={(e)=>setInput(e.target.value.trim())}/>

        <button className="searchbtn" onClick={()=>setValue(input)}>Search</button>
      </div>
      {Loading && <p className="loading">Loading Movies....</p>}
      {!Loading &&  !selectedMovie && (
        <div className="movie-list">
          {movies.map((movie)=>(
            <div className="movie-card" key={movie.imdbID} onClick={()=>setSelectedMovie(movie)}>
              <img src={movie.Poster} alt={movie.Title} />
              <div>
                <h3>{movie.Title}</h3>
              </div>    
            </div>
          ))}
        </div>
      )}

    </div>
  )
}

export default App
