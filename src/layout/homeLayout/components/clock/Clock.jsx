import React, {useEffect, useState} from "react";
import {useGetTime} from "./hooks/getTime.js";

export const Clock = () => {
    const currentTime = useGetTime();
    return (
        <h1 className="clock_time">{currentTime}</h1>
    )

}