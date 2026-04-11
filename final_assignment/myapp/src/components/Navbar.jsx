import styles from './Navbar.module.css'

export function Navbar({activePage,setActivePage}){

    return(
        <div className={styles.navbar}>
            <ul className={styles.list}>
                <li onClick={()=>setActivePage('Dashboard')}><button className={`${styles['nav-btn']} ${activePage === 'Dashboard' ? styles.active : '' }`}>Dashboard</button></li>
                <li onClick={()=>setActivePage('Skills')}><button className={`${styles['nav-btn']} ${activePage === 'Skills' ? styles.active : '' }`} >Skills</button></li>
                <li onClick={()=>setActivePage('Projects')}><button className={`${styles['nav-btn']} ${activePage === 'Projects' ? styles.active : '' }`} >Projects</button></li>
                <li onClick={()=>setActivePage('Application')}><button className={`${styles['nav-btn']} ${activePage === 'Application' ? styles.active : '' }`} >Application</button></li>
                <li onClick={()=>setActivePage('Notes')}><button className={`${styles['nav-btn']} ${activePage === 'Notes' ? styles.active : '' }`} >Notes</button></li>
                <li onClick={()=>setActivePage('Settings')}><button className={`${styles['nav-btn']} ${activePage === 'Settings' ? styles.active : '' }`} >Settings</button></li>
            </ul>
            <p className={styles}>Tip:Use check-in daily to build streak</p>

        </div>
    )
}