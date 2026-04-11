import { useState,useEffect } from 'react'
import styles from './Header.module.css'

export function Header({setCheckIn,activePage}){
    const [headInfo,setHeadInfo] = useState(()=>{
        const saved = localStorage.getItem('headInfo')
        return saved ? JSON.parse(saved) : {streak:0,best:0,date:""}
    })
    const [clickStreak,setClickStreak] = useState(false);
    const [tempInfo,setTempInfo] = useState({streak:0,best:0,date:""})

    const checkin = ()=>{
        if(clickStreak) return;
        const date = new Date().toLocaleDateString()
        const updated ={streak: tempInfo.streak+1 , best: tempInfo.best + 1, date: date}
        setTempInfo(updated)
        setHeadInfo(updated)
        setCheckIn(true)
        setClickStreak(true)
    }

    useEffect(()=>{
        localStorage.setItem('headInfo',JSON.stringify(headInfo))
    },[headInfo])
    
    return(
        <div className={styles.header}>
                <div className={styles.left}>
                    <h3>{activePage}</h3>
                    <ul>
                        <p>Current strak:{headInfo.streak}</p>
                        <li>Best:{headInfo.best}</li>
                        <li>Last check:{headInfo.date}</li>
                    </ul>
                </div>
                <button onClick={()=>checkin()}>Daily check-in</button>
        </div>
    )
}
