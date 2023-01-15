import React from "react";
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './index.css';
import {NotFoundLayout} from "./layout/notFoundLayout/NotFoundLayout.jsx";
import {paths} from "./layout/navigation/routes.js";
import ActionAreaLayout from "./layout/actionAreaLayout/ActionAreaLayout.jsx";
import HomeLayout from "./layout/homeLayout/HomeLayout.jsx";
import store from "./store/store.js";
import CommonLayout from "./layout/CommonLayout.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path={paths.default} element={<CommonLayout/>}>
                        <Route index element={<HomeLayout/>}/>
                        <Route path={paths.main} element={<ActionAreaLayout/>}/>
                        <Route path="*" element={<NotFoundLayout/>}/>
                    </Route>
                </Routes>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
)
;

