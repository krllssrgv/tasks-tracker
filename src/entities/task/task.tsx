import { memo } from 'react';
import classNames from 'classnames';
import { remove } from '@shared';
import { useTask } from './use-task';
import styles from './task.module.scss';

type Props = {
  id: number;
  title: string;
  done: boolean;
};

export const Task = memo(({ id, title, done }: Props) => {
  const { handleMakeDone, handleRemove } = useTask(id);

  return (
    <div className={styles.container}>
      <button
        className={classNames(
          styles.make_done,
          done ? styles.make_done_green : null
        )}
        onClick={handleMakeDone}
      ></button>
      <div
        className={classNames(styles.title, done ? styles.title_done : null)}
      >
        {title}
      </div>
      <button className={styles.delete}>
        <img
          src={remove}
          alt="Delete"
          className={styles.image}
          onClick={handleRemove}
        />
      </button>
    </div>
  );
});
