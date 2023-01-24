import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useLoginMutation} from "src/store/slices/api/auth/authApiSlice.js";
import {userActions} from "src/store/slices/userSlice.js";
import {storageConsts} from "src/utils/const/consts.js";
import {paths} from "src/utils/const/route.js";
import {authTypes, classNames} from "./consts/formConsts.js";
import AuthenticationForm from "../components/AuthenticationForm.jsx";


const LoginLayout = () => {

    const router = useRouter();
    const user = useSelector(state => state.userSlice.user);

    const [login, result] = useLoginMutation();


    useEffect(() => {
        if (result.error?.status === 403) {
            alert("Permission denied");
        }
        if (result.error?.data){
            localStorage.setItem(storageConsts.jwt, result.error.data);
            router.push(`/${user.login}${paths.homeINC}`);
        }
    }, [result])

    return (
        <div className={classNames.layoutClass}>
            <AuthenticationForm handleSubmit={login} authType={authTypes.login} savedUserData={userData }/>
        </div>
    )
}

export default LoginLayout;