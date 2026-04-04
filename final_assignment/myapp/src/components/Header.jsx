import styles from './Header.module.css'

export function Header(){

    return(
        <div className={styles.header}>
            <div className={styles.left}>
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