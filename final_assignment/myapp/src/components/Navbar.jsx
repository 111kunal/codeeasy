import styles from './Navbar.module.css'

export function Navbar({activePage,setActivePage}){

    return(
        <div className={styles.navbar}>
            <ul>
                <li><button className={`${styles['nav-btn']} ${activePage === 'dashboard' ? styles.active : '' }`} onClick={()=>{
                    setActivePage('dashboard')
                }}>Dashboard</button></li>
                <li><button className={`${styles['nav-btn']} ${activePage === 'skills' ? styles.active : '' }`} onClick={()=>{
                    setActivePage('skills')
                }}>Skills</button></li>
                <li><button className={`${styles['nav-btn']} ${activePage === 'projects' ? styles.active : '' }`} onClick={()=>{
                    setActivePage('projects')
                }}>Projects</button></li>
                <li><button className={`${styles['nav-btn']} ${activePage === 'application' ? styles.active : '' }`} onClick={()=>{
                    setActivePage('application')
                }}>Application</button></li>
                <li><button className={`${styles['nav-btn']} ${activePage === 'notes' ? styles.active : '' }`} onClick={()=>{
                    setActivePage('notes')
                }}>Notes</button></li>
                <li><button className={`${styles['nav-btn']} ${activePage === 'settings' ? styles.active : '' }`} onClick={()=>{
                    setActivePage('settings')
                }}>Settings</button></li>
            </ul>
            <p>Tip:Use check-in daily to build streak</p>

        </div>
    )
}