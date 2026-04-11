import { useState,useEffect } from 'react'
import styles from './TopBar.module.css'
import logo from '../assets/logo.png'


export function TopBar(){
    const [topBarInfo,setTopBarInfo] = useState(()=>{
          const saved = localStorage.getItem('topBarInfo')
          return saved ? JSON.parse(saved) : { name: 'Name', job: 'Job', goal: 'To become a CEO' }
    })
    const [formData,setFormData] = useState({name:"",job:"",goal:""})
    const [edit,setEdit] = useState(false)

    const save = ()=>{
        setTopBarInfo(formData)
        setEdit(false)
    }
    useEffect(()=>{
      localStorage.setItem('topBarInfo',JSON.stringify(topBarInfo))
    },[topBarInfo])

    return(
        <div className={styles.topbar}>
        <div className={styles.left}>
          <img src={logo} alt="" />
          <div className={styles['left-section']}>
            <h2>Developer Career OS</h2>
            <ul>
              <p>Track Skills</p>
              <li>Projects</li>
              <li>Application</li>
              <li>Streak</li>
            </ul></div>
        </div>
        {!edit && <div className={styles.right}>
          <div className={styles.box1}>
            <div className={styles.box2}>
              <h3>{topBarInfo.name}</h3>
              <p>{topBarInfo.job} Goal:{topBarInfo.goal}</p>
            </div>
            <h1 className={styles.nsymbol}>{topBarInfo.name[0]?.toUpperCase()}</h1>
          </div>
          <button className={styles.Editbtn} onClick={()=>setEdit(true)}>Edit</button>
        </div>}

        {edit && <div className={styles['edit-box']}>
          <input type="text" placeholder='Name' onChange={(e)=>setFormData({...formData ,name:e.target.value})} />
          <input type="text" placeholder='Job' onChange={(e)=>setFormData({...formData ,job:e.target.value})}/>
          <input type="text" placeholder='Goal' onChange={(e)=>setFormData({...formData ,goal:e.target.value})} />
          <div className={styles['edit-btns']}>
            <button className={styles.savebtn} onClick={save}>Save</button>
            <button className={styles.closebtn} onClick={()=>setEdit(false)}>Close</button>
          </div>
          </div>}
      </div>
    )
}