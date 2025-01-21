import { TodoInput, Tasks } from '@widgets';
import styles from './todo-page.module.scss';

export const TodoPage = () => {
  return (
    <div className={styles.todo}>
      <TodoInput />
      <Tasks />
    </div>
  );
};
