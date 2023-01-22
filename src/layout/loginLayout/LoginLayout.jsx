import {classNames} from "./consts/formConsts.js";
import AuthenticationForm from "./components/AuthenticationForm.jsx";

const LoginLayout = () => {


    return (
        <div className={classNames.layoutClass}>
            <AuthenticationForm/>
        </div>
    )
}

export default LoginLayout;