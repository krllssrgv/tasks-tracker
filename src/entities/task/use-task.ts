import { useAppDispatch } from '@shared';
import { switchTask, removeTask } from '../tasks-reducer';

export const useTask = (id: string) => {
  const dispatch = useAppDispatch();

  const handleSwitch = () => {
    dispatch(switchTask(id));
  };

  const handleRemove = () => {
    dispatch(removeTask(id));
  };

  return {
    handleSwitch,
    handleRemove,
  };
};
