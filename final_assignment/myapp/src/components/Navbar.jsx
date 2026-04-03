import './Navbar.css'

export function Navbar(activePage,setActivePage){

    return(
        <div className="navbar">
            <ul>
                <li><button className={`nav-btn ${activePage === 'dashboard' ? 'active' : '' }`} onClick={()=>{
                    setActivePage('dashboard')
                }}>Dashboard</button></li>
                <li><button className={`nav-btn ${activePage === 'skills' ? 'active' : '' }`} onClick={()=>{
                    setActivePage('skills')
                }}>Skills</button></li>
                <li><button className={`nav-btn ${activePage === 'projects' ? 'active' : '' }`} onClick={()=>{
                    setActivePage('projects')
                }}>Projects</button></li>
                <li><button className={`nav-btn ${activePage === 'application' ? 'active' : '' }`} onClick={()=>{
                    setActivePage('application')
                }}>Application</button></li>
                <li><button className={`nav-btn ${activePage === 'notes' ? 'active' : '' }`} onClick={()=>{
                    setActivePage('notes')
                }}>Notes</button></li>
                <li><button className={`nav-btn ${activePage === 'settings' ? 'active' : '' }`} onClick={()=>{
                    setActivePage('settings')
                }}>Settings</button></li>
            </ul>
            <p>Tip:Use check-in daily to build streak</p>

        </div>
    )
}