import { useState } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Dashboard } from './components/Dashboard'
import './App.css'
import { Header } from './components/Header'




function App() {
  const [activePage,setActivePage] = useState("")

  return (
    <div className='app'>
      <TopBar/>
      <div className='hero'>
        <Navbar activePage={activePage} setActivePage={setActivePage}/>
        <div>
          <Header/>
          <Dashboard/>
        </div>
        
      </div>
    </div>
  )
}

export default App
