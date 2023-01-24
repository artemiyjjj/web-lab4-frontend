import Link from "next/link";
import React from "react";
import {paths} from "src/utils/const/route.js";

export const ErrorLayout = (props) => {

    return (
        <div className="container">
            <h1>{props.text}</h1>
            <Link href={paths.default} className="not-found-link">Go to the home page</Link>
        </div>
    )
}