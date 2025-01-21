import { memo } from 'react';
import classNames from 'classnames';
import styles from './filter.module.scss';

type Props = {
  text: string;
  onClick: () => void;
  active: boolean;
};

export const Filter = memo(({ text, onClick, active }: Props) => {
  return (
    <button
      className={classNames(
        styles.filter,
        active ? styles.filter_active : null
      )}
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
});
