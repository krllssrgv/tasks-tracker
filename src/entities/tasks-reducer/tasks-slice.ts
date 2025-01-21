import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type Task = {
  id: string;
  title: string;
  done: boolean;
};

type TasksState = Record<string, Task>;

const initialState: TasksState = {};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    initTasks: (state: TasksState, action: PayloadAction<TasksState>) => {
      Object.assign(state, action.payload);
    },
    addTask: (state: TasksState, action: PayloadAction<Task>) => {
      state[action.payload.id] = action.payload;
    },
    removeTask: (state: TasksState, action: PayloadAction<string>) => {
      delete state[action.payload];
    },
    switchTask: (state: TasksState, action: PayloadAction<string>) => {
      if (state[action.payload]) {
        state[action.payload].done = !state[action.payload].done;
      }
    },
  },
});

export const { initTasks, addTask, removeTask, switchTask } =
  tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
