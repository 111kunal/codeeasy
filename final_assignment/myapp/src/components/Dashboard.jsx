import styles from './Dashboard.module.css'

export function Dashboard({checkIn,countskill}){

    return(
        <div className={styles.main}>
            <div className={styles.header}>
                

            </div>
            <div className={styles.middle}>
                <div className={styles['skill-box']}>
                    <h4>Skills Completed</h4>
                    <h2>0/{countskill}</h2>
                    <p>0% at target</p>
                </div>
                <div className={styles['skill-box']}>
                    <h4>Project Done</h4>
                    <h2>0/1</h2>
                    <p>0% completed</p>
                </div>
                <div className={styles['skill-box']}>
                    <h4>Application</h4>
                    <h2>1</h2>
                    <p>Offer:0 .Interview:0</p>
                </div>
                <div className={styles['skill-box']}>
                    <h4>Avg Skill Level</h4>
                    <h2>2.5/5</h2>
                    <p>Aim: 4+ across core stack</p>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.pipeline}>
                    <h4>Pipeline Snapshot</h4>
                    <div className={styles['info-block']}>
                        <div className={styles['info-box']}>Applied:1</div>
                        <div className={styles['info-box']}>Screening:0</div>
                        <div className={styles['info-box']}>Interview:0</div>
                        <div className={styles['info-box']}>Offer:0</div>
                        <div className={styles['info-box']}>Rejected:0</div>
                    </div>
                    <p>This is what makes your resume "real": consistent application + iteration.</p>
                </div>
                <div className={styles.updates}>
                    <h4 className={styles.title}>Latest Updates</h4>
                    <div className={styles['update-box']}>
                        <div>
                            <p>Latest Project</p>
                            <h4>Weatehr Dashboard.in Progress</h4>
                        </div>
                        <button>Open</button>
                    </div>
                    <div className={styles['update-box']}>
                        <div>
                            <p>Latest Note</p>
                            <h4>Interview Prep</h4>
                        </div>
                        <button>Open</button>
                    </div>
                    <div className={styles['update-box']}>
                        <div>
                            <p>check-in Today</p>
                            {checkIn && <h4>Yes</h4>}
                            {!checkIn && <h4>No</h4>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}