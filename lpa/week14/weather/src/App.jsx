import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [loading,setLoading] = useState(null)
  const [error,setError] = useState(null)
  const [data, setData] = useState([])
  const [input,setInput] = useState(null)

  const fetchWeather = async ()=>{
    setLoading(true)
    setError(false)
    setData([])
    const api_key = 'af81929be1b3b02cf59ea82d61fdc1c8';
    try{
      const response = await fetch(`https://api.weatherstack.com/current?access_key=${api_key}&query=${input}`)
      if(!response.ok){
        throw new Error("something went wrong")
      }
      const data = await response.json()

      setData(data)
    }
    catch(error){
      setError(error.message)
    }
    finally{
      setLoading(false)
    }
    
  }
  

  return (
    <div className='app'>
      <h1>Weather App</h1>
      <input type="text" placeholder='Enter the city Name...' onChange={(e)=>setInput(e.target.value)} />
      <button className='searchbtn' onClick={fetchWeather}>Search</button>
      {loading && <p>Loading...</p>}
      {data.current && <div className='info'>
        <p>City:{data?.location?.name}</p>
        <p>temp:{data?.current?.temperature}</p>
      </div>}
    </div>
  )
}

export default App
