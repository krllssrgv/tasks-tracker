import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from '@entities';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

declare global {
  type RootState = ReturnType<typeof store.getState>;
  type AppDispatch = typeof store.dispatch;
}
