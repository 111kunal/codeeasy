import { useState } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Dashboard } from './components/Dashboard'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Skills } from './components/Skills'




function App() {
  const [activePage,setActivePage] = useState("skills")

  return (
    <div className={styles.app}>
      <TopBar/>
      <div className={styles.hero}>
        <Navbar activePage={activePage} setActivePage={setActivePage}/>
        <div className={styles['display-section']}>
          <Header/>
          {activePage == "dashboard" && <Dashboard/>}
          {activePage == "skills" && <Skills/>}
        </div>
        
        
      </div>
    </div>
  )
}

export default App
