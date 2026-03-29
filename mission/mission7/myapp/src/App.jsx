import { useState, useEffect } from "react"
import './App.css'

function App() {
  const [Coins,setCoins] = useState([])
  const [Loading,setLoading] = useState(true)
  const [selectedCoin,setSelectedCoin] = useState(null)

  useEffect(()=>{
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1"
    )
    .then((res)=> res.json())
    .then((data)=>{
      setCoins(data)
      setLoading(false)
    })
    .catch(()=>setLoading(false))
  },[])
  return (
    <div className="app">
      <h1 className="title">🚀 Crypto Price Tracker</h1>
      {Loading && <p className="loading">Loading Prices....</p>}
      {!Loading && !selectedCoin && (
        <div className="crypto-list">
          {Coins.map((coin)=>(
            <div 
            className="crypto-card"
            key={coin.id}
            onClick={()=>setSelectedCoin(coin)}
            >
              <div className="left">
                <img src={coin.image} alt={coin.name} />
                <div>
                  <h3>{coin.name}</h3>
                  <p className="symbol">{coin.symbol.toUpperCase()}</p>
                </div>
              </div>
              <div className="right">
                <p className="price">${coin.current_price}</p>
                <p className={coin.price_change_percentage_24h > 0 ? "change green" : "change red"}>{coin.price_change_percentage_24h.toFixed(2)}%
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    {selectedCoin && (<div className="modal">
      <div className="head">
        <img src={selectedCoin.image} alt={selectedCoin.title} />
        <button className="backbtn" onClick={()=>setSelectedCoin(null)}>Back</button>
      </div>
      <div className="cardcontent">
        <p>Price:{selectedCoin.current_price}</p>
        <p>Market Cap:{selectedCoin.market_cap}</p>
        <p>24h Change:{selectedCoin.price_change_percentage_24h}</p>
        <p>High 24h:{selectedCoin.high_24h}</p>
        <p>Low 24h:{selectedCoin.low_24h}</p>
      </div>
    </div>)}

    </div>
  )
}

export default App
