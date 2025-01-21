import { useState } from 'react';
import styles from './tasks.module.scss';

export const Tasks = () => {
    const [filter, setFilter] = useState<'all' | 'done' | 'active'>('all');

    return(
        <div className={styles.container}>
            <div className={styles.filters}>

            </div>
            <div className={styles.tasks_list}>

            </div>
        </div>
    )
}