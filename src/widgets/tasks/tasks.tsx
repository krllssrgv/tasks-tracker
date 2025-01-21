import { useState } from 'react';
import { Filter, Task } from '@entities';
import styles from './tasks.module.scss';

export const Tasks = () => {
  const [filter, setFilter] = useState<'all' | 'done' | 'active'>('all');
  const t = [
    {
      id: 1,
      title: 'Do something',
      done: false,
    },
    {
      id: 2,
      title: 'Do not something',
      done: true,
    },
  ];

  let filteredTasks;
  if (filter === 'done') {
    filteredTasks = t.filter((task) => task.done);
  } else if (filter === 'active') {
    filteredTasks = t.filter((task) => !task.done);
  } else {
    filteredTasks = t;
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
