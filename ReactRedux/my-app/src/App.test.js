import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

test('renders App', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>);
});
