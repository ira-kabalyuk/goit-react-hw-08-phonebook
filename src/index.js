import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { App } from 'components/App';

import './index.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <PersistGate persistor={persistor} loading={null}>
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <App />
        </BrowserRouter>
      </Provider>
      </React.StrictMode>
  </PersistGate>
);
