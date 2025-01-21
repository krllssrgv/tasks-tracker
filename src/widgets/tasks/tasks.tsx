import { useState } from 'react';
import { Filter, Task, selectTasks } from '@entities';
import { useAppSelector } from '@shared';
import styles from './tasks.module.scss';

export const Tasks = () => {
  const [filter, setFilter] = useState<'all' | 'done' | 'active'>('all');
  const currentTasks = useAppSelector(selectTasks);

  let filteredTasks;
  if (filter === 'done') {
    filteredTasks = Object.values(currentTasks).filter((task) => task.done);
  } else if (filter === 'active') {
    filteredTasks = Object.values(currentTasks).filter((task) => !task.done);
  } else {
    filteredTasks = Object.values(currentTasks);
  }

  const displayedTasks = filteredTasks.map((task) => (
    <Task key={task.id} id={task.id} title={task.title} done={task.done} />
  ));

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <Filter
          text="Все"
          onClick={() => setFilter('all')}
          active={filter === 'all'}
        />
        <Filter
          text="Активные"
          onClick={() => setFilter('active')}
          active={filter === 'active'}
        />
        <Filter
          text="Сделанные"
          onClick={() => setFilter('done')}
          active={filter === 'done'}
        />
      </div>
      <div className={styles.tasks_list}>{displayedTasks}</div>
    </div>
  );
};
