import { use, useState } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Dashboard } from './components/Dashboard'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Skills } from './components/Skills'




function App() {
  const [activePage,setActivePage] = useState("dashboard")
  const [checkIn,setCheckIn] = useState(false)
  const [date,setDate] = useState("")
  const [streak,setStreak] = useState(0)
  const [noOfSkills,setNoOfSkills] = useState(null)
  const [skillInfo,setSkillInfo] = useState(() => {
          const saved = localStorage.getItem('skillInfo')
          return saved ? JSON.parse(saved) : []
      })


  return (
    <div className={styles.app}>
      <TopBar/>
      <div className={styles.hero}>
        <Navbar activePage={activePage} setActivePage={setActivePage}/>
        <div className={styles['display-section']}>
          <Header setCheckIn={setCheckIn} date={date} setDate={setDate} streak={streak} setStreak={setStreak}/>

          {activePage == "dashboard" && <Dashboard checkIn={checkIn} countskill={skillInfo.length}  noOfSkills={noOfSkills} />}

          {activePage == "skills" && <Skills skillInfo={skillInfo} setSkillInfo={setSkillInfo} setNoOfSkills={setNoOfSkills} />}
        </div>
        
        
      </div>
    </div>
  )
}

export default App
