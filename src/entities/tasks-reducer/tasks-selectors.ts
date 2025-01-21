import { createSelector } from '@reduxjs/toolkit';

export const selectTasks = createSelector(
  [(state: RootState) => state.tasks],
  (tasks) => tasks
);
