import { memo } from 'react';
import classNames from 'classnames';
import { remove } from '@shared';
import { useTask } from './use-task';
import styles from './task.module.scss';

type Props = {
  id: string;
  title: string;
  done: boolean;
};

export const Task = memo(({ id, title, done }: Props) => {
  const { handleSwitch, handleRemove } = useTask(id);

  return (
    <div className={styles.container} data-testid="task-container">
      <button
        data-testid="task-done"
        className={classNames(
          styles.make_done,
          done ? styles.make_done_green : null
        )}
        onClick={handleSwitch}
      ></button>
      <div
        data-testid="task-title"
        className={classNames(styles.title, done ? styles.title_done : null)}
      >
        {title}
      </div>
      <button
        className={styles.delete}
        onClick={handleRemove}
        data-testid="task-delete"
      >
        <img src={remove} alt="Delete" className={styles.image} />
      </button>
    </div>
  );
});
