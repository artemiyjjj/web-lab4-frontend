import React, {useEffect, useState} from "react";
import {useGetTime} from "./hooks/getTime.js";

const Clock = () => {
    const currentTime = useGetTime();
    return (
        <h1 className="clock_time">{currentTime}</h1>
    )
}

export default Clock;