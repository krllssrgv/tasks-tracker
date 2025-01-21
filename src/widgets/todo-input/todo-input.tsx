import { useAdd } from './use-add';
import styles from './todo-input.module.scss';

export const TodoInput = () => {
  const { handleAdd, title, setTitle } = useAdd();

  return (
    <div className={styles.container}>
      <input
        data-testid="input"
        className={styles.input}
        type="text"
        maxLength={40}
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button className={styles.add} onClick={handleAdd} data-testid="save">
        +
      </button>
    </div>
  );
};
