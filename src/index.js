import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import {Provider} from "react-redux";
import ActionAreaLayout from "./layout/actionAreaLayout/ActionAreaLayout.jsx";
import Header from "./components/header/Header.jsx"
import store from "./store/store.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Header/>
            <ActionAreaLayout/>
        </Provider>
    </React.StrictMode>
);

