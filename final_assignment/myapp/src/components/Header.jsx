import './Header.css'

export function Header(){

    return(
        <div className='header'>
            <div className='left'>
                    <h3>Dashboard</h3>
                    <ul>
                        <p>Current strak:0</p>
                        <li>Best:0</li>
                        <li>Last check:--</li>
                    </ul>
                </div>
                <button>Daily check-in</button>
        </div>
    )
}