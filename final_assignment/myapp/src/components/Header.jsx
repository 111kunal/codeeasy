import { useState } from 'react'
import styles from './Header.module.css'

export function Header({date,setDate,setCheckIn,streak,setStreak}){
    const [clickStreak,setClickStreak] = useState(false);
    return(
        <div className={styles.header}>
            <div className={styles.left}>
                    <h3>Dashboard</h3>
                    <ul>
                        <p>Current strak:{streak}</p>
                        <li>Best:0</li>
                        <li>Last check:{date}</li>
                    </ul>
                </div>
                <button onClick={()=>{
                    setCheckIn(true)
                    {!clickStreak && setStreak(streak+1)}
                    setClickStreak(true)
                    const today = new Date()
                    console.log(today)
                    const day = today.getDate()
                    const month = today.toLocaleString('default', { month: 'long' })
                    const year = today.getFullYear()
                    setDate(`${day}/${month}/${year}`)
                }}>Daily check-in</button>
        </div>
    )
}