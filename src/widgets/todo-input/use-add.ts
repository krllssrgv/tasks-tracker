import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addTask } from '@entities';
import { useAppDispatch } from '@shared';

export const useAdd = () => {
  const [title, setTitle] = useState('');
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    if (title) {
      dispatch(
        addTask({
          id: uuidv4(),
          title: title,
          done: false,
        })
      );
      setTitle('');
    }
  };

  return {
    handleAdd,
    title,
    setTitle,
  };
};
