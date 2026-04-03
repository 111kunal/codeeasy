import './Dashboard.css'

export function Dashboard(){

    return(
        <div className='main'>
            <div className="header">
                

            </div>
            <div className="middle">
                <div className='skill-box'>
                    <h4>Skills Completed</h4>
                    <h2>0/4</h2>
                    <p>0% at target</p>
                </div>
                <div className='skill-box'>
                    <h4>Project Done</h4>
                    <h2>0/1</h2>
                    <p>0% completed</p>
                </div>
                <div className='skill-box'>
                    <h4>Application</h4>
                    <h2>1</h2>
                    <p>Offer:0 .Interview:0</p>
                </div>
                <div className='skill-box'>
                    <h4>Avg Skill Level</h4>
                    <h2>2.5/5</h2>
                    <p>Aim: 4+ across core stack</p>
                </div>
            </div>
            <div className="bottom">
                <div className="pipeline">
                    <h4>Pipeline Snapshot</h4>
                    <div className='info-block'>
                        <div className='info-box'>Applied:1</div>
                        <div className='info-box'>Screening:0</div>
                        <div className='info-box'>Interview:0</div>
                        <div className='info-box'>Offer:0</div>
                        <div className='info-box'>Rejected:0</div>
                    </div>
                    <p>This is what makes your resume "real": consistent application + iteration.</p>
                </div>
                <div className="updates">
                    <h4>Latest Updates</h4>
                    <div className="update-box">
                        <div>
                            <p>Latest Project</p>
                            <h4>Weatehr Dashboard.in Progress</h4>
                        </div>
                        <button>Open</button>
                    </div>
                    <div className="update-box">
                        <div>
                            <p>Latest Note</p>
                            <h4>Interview Prep</h4>
                        </div>
                        <button>Open</button>
                    </div>
                    <div className="update-box">
                        <div>
                            <p>check-in Today</p>
                            <h4>No</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}