import styles from './Navbar.module.css'

export function Navbar({activePage,setActivePage}){

    return(
        <div className={styles.navbar}>
            <ul className={styles.list}>
                <li onClick={()=>setActivePage('dashboard')}><button className={`${styles['nav-btn']} ${activePage === 'dashboard' ? styles.active : '' }`}>Dashboard</button></li>
                <li onClick={()=>setActivePage('skills')}><button className={`${styles['nav-btn']} ${activePage === 'skills' ? styles.active : '' }`} >Skills</button></li>
                <li onClick={()=>setActivePage('projects')}><button className={`${styles['nav-btn']} ${activePage === 'projects' ? styles.active : '' }`} >Projects</button></li>
                <li onClick={()=>setActivePage('application')}><button className={`${styles['nav-btn']} ${activePage === 'application' ? styles.active : '' }`} >Application</button></li>
                <li onClick={()=>setActivePage('notes')}><button className={`${styles['nav-btn']} ${activePage === 'notes' ? styles.active : '' }`} >Notes</button></li>
                <li onClick={()=>setActivePage('settings')}><button className={`${styles['nav-btn']} ${activePage === 'settings' ? styles.active : '' }`} >Settings</button></li>
            </ul>
            <p className={styles}>Tip:Use check-in daily to build streak</p>

        </div>
    )
}