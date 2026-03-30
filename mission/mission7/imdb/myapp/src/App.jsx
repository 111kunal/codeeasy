import { useState,useEffect } from 'react'
import './App.css'
import imdbimg from './assets/imdb.png'

function App() {
  const [input,setInput] = useState("")
  const [value,setValue] = useState("")
  const [movies,setMovies] = useState([])
  const [Loading,setLoading] = useState(true)
  const [selectedMovie,setSelectedMovie] = useState(null)
  const [hasSearched,setHasSearched] = useState(false)
  const [response,setResponse] = useState(null)
  const [error,setError] = useState(null)

  useEffect(()=>{
    if(!value) return;
    fetch(
      `https://www.omdbapi.com/?s=${value}&apikey=63cf737a`
    )
    .then((res)=>res.json())
    .then((data)=>{
      setMovies(data.Search || [])
      setResponse(data.Response)
      setError(data.Error)
      setLoading(false)
    })
    .catch(()=>setLoading(false))
  },[value])
  return (
    <div className='app'>
      <div className='header'>
        <img src={imdbimg} alt="imdb logo" />

        <div className="searchbox">
          <input type="text" className='userinput' placeholder='Enter the Name.....' onChange={(e)=>setInput(e.target.value.trim())}/>

          <button className="searchbtn" onClick={()=>{
            setValue(input)
            setHasSearched(true)
          }}>Search</button>
        </div>
        
      </div>
      {Loading && value && <p className="loading">Loading Movies....</p>}
      {hasSearched && !Loading && response == "False" && <p className='error'>{error}</p>}
      {!Loading &&  !selectedMovie && (
        <div className="movie-list">
          {movies.map((movie)=>(
            <div className="movie-card" key={movie.imdbID} onClick={()=>setSelectedMovie(movie)}>
              <img src={movie.Poster} alt={movie.Title} />
              <div className='card-info'>
                <h3>{movie.Title}</h3>
                <div>
                  <p>{movie.Type}</p>
                  <p>{movie.Year}</p>
                </div>
              </div>    
            </div>
          ))}
        </div>
      )}

    </div>
  )
}

export default App
