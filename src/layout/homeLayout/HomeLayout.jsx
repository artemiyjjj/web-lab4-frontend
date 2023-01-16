import React from "react";
import {NavLink} from "react-router-dom";
import {paths} from "../navigation/routes.js";
import {Clock} from "./components/clock/Clock.jsx";

const HomeLayout = () => {


    return (
        <>
            <div className="home-container">
                <h1>Groove street. Home</h1>
                <Clock/>
                <NavLink to={paths.main} className="home-container__link">Go to the main page!</NavLink>
            </div>
        </>
    )
}

export default HomeLayout;