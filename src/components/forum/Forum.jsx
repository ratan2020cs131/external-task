import React from 'react'
import styles from './forum.module.css';
import { Person } from '../../asset/svg';

const Forum = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <img src={Person} alt='avatar'></img>
                <h2>New AI Forum #1325</h2>
            </div>
            <div>
                <div className={styles.input}>
                    <h2>Forum Name</h2>
                    <input type="text" placeholder='e.g. Philosophy 2nd Year'/>
                </div>
            </div>

            <div>
                <div className={styles.input}>
                    <h2>Description</h2>
                    <input type="text" placeholder='e.g. Philosophy 2nd Year'/>
                </div>
            </div>
        </div>
    )
}

export default Forum
