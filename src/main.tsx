import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux-state/store.ts';

import App from './App.tsx';

import './styles/global/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
  </StrictMode>
);
