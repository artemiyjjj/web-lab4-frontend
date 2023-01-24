import {useRouter} from "next/router";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useSignUpMutation} from "src/store/slices/api/auth/authApiSlice.js";
import {userActions} from "src/store/slices/userSlice.js";
import store from "src/store/store.js";
import {storageConsts} from "src/utils/const/consts.js";
import {paths} from "src/utils/const/route.js";
import {authTypes, classNames} from "../loginLayout/consts/formConsts.js";
import AuthenticationForm from "../components/AuthenticationForm.jsx";

const LoginLayout = () => {


    const [signUp, result] = useSignUpMutation();
    const router = useRouter();
    const dispatcher = useDispatch();

    useEffect(() => {
        const userdata = localStorage.getItem(storageConsts.user);
        if (userdata) {
            router.push(paths.login);
        }
        if (!result.isUninitialized) {
            console.log("sign", result)
            result.data && router.push(paths.login);
            const user = {
                login: result?.data?.username,
                isAuthorized: true,
                data: {
                    firstName: result?.data?.firstName,
                    registrationTime: 0,//result?.data?.registrationTime,
                    shotsMade: 0,//result?.data?.shotsMade,
                }
            }
            dispatcher(userActions.setUser(user));
            localStorage.setItem(storageConsts.user, JSON.stringify(user));
            console.log("URAAA", store.getState());
        }
        if (result.isError) {
            localStorage.removeItem(storageConsts.user);
            alert("No connection");

        }
    }, [result]);

    return (
        <div className={classNames.layoutClass}>
            <AuthenticationForm handleSubmit={signUp} authType={authTypes.signUp}/>
        </div>
    )
}

export default LoginLayout;