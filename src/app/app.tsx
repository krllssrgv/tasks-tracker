import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { TodoPage } from '@pages';
import { store } from './store';
import './app.css';

export const App = () => {
  useEffect(() => {
    document.title = 'Your tasks';
  }, []);

  return (
    <Provider store={store}>
      <TodoPage />
    </Provider>
  );
};
