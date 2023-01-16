import {useEffect, useState} from "react";

export const useGetTime = () =>{
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)
        return () => clearInterval(interval)
    })

    return currentTime.toLocaleString()

}