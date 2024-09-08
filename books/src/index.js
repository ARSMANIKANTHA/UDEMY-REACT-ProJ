import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {Provider} from './context/books';
const elem = document.getElementById('root');
const root = ReactDOM.createRoot(elem);

root.render(
    <Provider>
        <App/>
    </Provider>
);