import React from "react";
import {Provider} from "react-redux";
import {Outlet, Route, Routes} from "react-router-dom";

import Header from "./components/header/Header.jsx";
import ActionAreaLayout from "./actionAreaLayout/ActionAreaLayout.jsx";
import HomeLayout from "./homeLayout/HomeLayout.jsx";
import store from "../store/store.js";

const CommonLayout = () => {

    return (
        <>
            <Header/>
            <div className="container">
                <Outlet/>
            </div>
        </>

    )
}

export default CommonLayout;