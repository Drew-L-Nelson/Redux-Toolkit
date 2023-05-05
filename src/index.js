import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index1.css'; CHAPTER 1
import './index4.css'
import { store } from './app/store';
import { Provider } from 'react-redux';
import { fetchUsers } from './features/users/usersSlice';

store.dispatch(fetchUsers());

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
