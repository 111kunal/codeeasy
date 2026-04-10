import { useState , useEffect } from 'react'
import styles from './Skills.module.css'

export function Skills({skillInfo,setSkillInfo,setNoOfSkills}){
    const [clickAdd,setClickAdd] = useState(false)
    const [skillname,setSkillName] = useState(null)
    const [addValue,setAddValue] = useState("")

    const addskill = (skillname)=>{
        setClickAdd(false)
        setSkillInfo([...skillInfo,{name:skillname, level:3,target:5,notes:"whats's next?"}])
        setAddValue("")
    }

    useEffect(() => {
        localStorage.setItem('skillInfo', JSON.stringify(skillInfo))
    }, [skillInfo])


    const deletebtn = (index)=>{
        setSkillInfo(skillInfo.filter((_,i)=>i!=index))
    }
    const filteredvalues = skillname? skillInfo.filter((value)=>value.name.includes(skillname)):skillInfo
    return(
        <div className={styles.main}>
            <div className={styles.header}>
                <h4>Skills</h4>
                <div>
                    {!clickAdd && <div>
                        <input type="text" placeholder='Search skills...' onChange={(e)=>setSkillName(e.target.value)}/>
                        <button onClick={()=>{
                            setClickAdd(true)
                        }}>+Add</button>
                    </div>}
                    {clickAdd && <div>
                        <input type="text" placeholder='skill name eg.html,css etc.' onChange={(e)=>{setAddValue(e.target.value)}}/>
                        <button onClick={()=>{
                            addskill(addValue)
                        }}>Add</button>
                        <button onClick={()=>{
                            setClickAdd(false)
                        }}>Close</button>
                        </div>}
                </div>
            </div>
            <div className={styles.middle}>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Skill</th>
                            <th>level</th>
                            <th>Target</th>
                            <th>Notes</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className={styles.tbody}>
                            {filteredvalues.map((value,index)=>(
                                <tr key={index}>
                                    <td><h4>{value.name}</h4></td>
                                <td className={styles.level}><button>-</button>
                                <h4>{value.level}</h4>
                                <button>+</button>
                                </td>
                                <td>
                                    <select name="" id="">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option></select>
                                </td>
                                <td>
                                    <input type="text" placeholder={value.notes} />
                                </td>
                                <td><button onClick={()=>deletebtn(index)}>Delete</button></td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            <p>Rule:Target 4/5 on core stack + be able to explain decisions.</p>
        </div>
    )
}