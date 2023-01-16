import React from "react";
import {Outlet, Route, Routes} from "react-router-dom";

import Header from "./components/header/Header.jsx";

const CommonLayout = () => {

    return (
        <>
            <Header/>
            <Outlet/>
        </>

    )
}

export default CommonLayout;