import React from "react";
import {Link, NavLink} from "react-router-dom";
import {paths} from "../navigation/routes.js";

export const NotFoundLayout = () => {

    return (
        <>
            <h1>Page is not found</h1>
            <NavLink to={"/" + paths.main} className="not-found-link">Go to the home page</NavLink>
        </>
    )
}