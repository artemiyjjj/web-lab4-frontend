import {useRouter} from "next/router";
import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {paths} from "src/utils/const/route.js";

const StartingPage = () => {
    const user = useSelector(state => state.userSlice.user);
    const router = useRouter();

    useEffect(()=>{
        if (user.authorized)
            router.push(user.login + paths.homeINC);
        else router.push(paths.login);
    },[user])
    return null;
}
export default StartingPage;