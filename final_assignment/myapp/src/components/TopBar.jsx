import { useState } from 'react'
import './TopBar.css'
import logo from '../assets/logo.png'


export function TopBar(){
    const [inputName,setInputName] = useState("")
    const [userName,setUserName] = useState("Name")
    const [inputJob,setInputJob] = useState("")
    const [job,setJob] = useState("Job")
    const [inputGoal,setInputGoal] = useState("")
    const [goal,setGoal] = useState("To become a CEO")
    const [edit,setEdit] = useState(false)

    const save = ()=>{
        setUserName(inputName)
        setJob(inputJob)
        setGoal(inputGoal)
        setEdit(false)
    }

    return(
        <div className="header">
        <div className="left">
          <img src={logo} alt="" />
          <div className='left-section'>
            <h2>Developer Career OS</h2>
            <ul>
              <p>Track Skills</p>
              <li>Projects</li>
              <li>Application</li>
              <li>Streak</li>
            </ul></div>
        </div>
        {!edit && <div className="right">
          <div className='box1'>
            <div className='box2'>
              <h3>{userName}</h3>
              <p>{job} Goal:{goal}</p>
            </div>
            <h1>{userName[0]?.toUpperCase()}</h1>
          </div>
          <button className='Editbtn' onClick={()=>setEdit(true)}>Edit</button>
        </div>}

        {edit && <div className='edit-box'>
          <input type="text" placeholder='Name' onChange={(e)=>setInputName(e.target.value)} />
          <input type="text" placeholder='Job' onChange={(e)=>setInputJob(e.target.value)}/>
          <input type="text" placeholder='Goal' onChange={(e)=>setInputGoal(e.target.value)} />
          <div className='edit-btns'>
            <button className='savebtn' onClick={save}>Save</button>
            <button className='closebtn' onClick={()=>setEdit(false)}>Close</button>
          </div>
          </div>}
      </div>
    )
}