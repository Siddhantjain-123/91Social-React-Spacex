import React from 'react';
import ReactDOM from 'react-dom';

import { persistor, store } from './store';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
    , document.getElementById('root')
);
