import React from "react";
import {Link, NavLink} from "react-router-dom";
import {paths} from "../navigation/routes.js";

export const NotFoundLayout = () => {

    return (
        <div className="container">
            <h1>Page is not found</h1>
            <NavLink to={paths.default} className="not-found-link">Go to the home page</NavLink>
        </div>
    )
}