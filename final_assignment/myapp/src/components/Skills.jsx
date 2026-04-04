import styles from './Skills.module.css'

export function Skills(){

    return(
        <div className={styles.main}>
            <div className={styles.header}>
                <h4>Skills</h4>
                <div>
                    <input type="text" placeholder='Search skills...' />
                    <button>+Add</button>
                </div>
            </div>
            <div className={styles.middle}>
                <table border={2}>
                    <thead>
                        <tr>
                            <th>Skill</th>
                            <th>level</th>
                            <th>Target</th>
                            <th>Notes</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><h4>Html</h4></td>
                            <td><button>-</button>
                            <h4>3</h4>
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
                                <input type="text" placeholder="What's next?" />
                            </td>
                            <td><button>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>Rule:Target 4/5 on core stack + be able to explain decisions.</p>
        </div>
    )
}