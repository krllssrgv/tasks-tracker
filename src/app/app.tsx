import { useEffect } from 'react';
import { TodoPage } from '@pages';
import './app.css';

export const App = () => {
  useEffect(() => {
    document.title = 'Your tasks';
  }, []);

  return <TodoPage />;
};
