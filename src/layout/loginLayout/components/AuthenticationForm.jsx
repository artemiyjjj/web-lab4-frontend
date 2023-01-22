import {useState} from "react";
import {
    loginInputField,
    passwordInputField,
    loginActionButton,
    registerActionButton,
    classNames
} from "../consts/formConsts.js";
import ActionButton from "src/components/ActionButton.jsx";
import InputField from "src/components/InputField.jsx";

const AuthenticationForm = () => {

    const {login, setLogin} = useState("");
    const {password, setPassword} = useState("");

    console.log(login + " " + password)



    const handleLogin = (event) => {
        event.preventDefault();
        // loginUser();
    }

    const handleRegistration = (event) => {
        event.preventDefault();
        // registrateUser()
    }

    return (
        <form className={classNames.formClass} onSubmit={(event) => setLogin(event)}>
            <InputField name={loginInputField.name} placeholder={loginInputField.placeholder}
                        type={loginInputField.type}
                        label={loginInputField.label} isRequired={loginInputField.isRequired}
                        className={classNames.loginFieldClass} setValue={(event) => setPassword(event)}/>

            <InputField name={passwordInputField.name} placeholder={passwordInputField.placeholder}
                        type={passwordInputField.type}
                        label={passwordInputField.label} isRequired={passwordInputField.isRequired}
                        className={classNames.passwordFieldClass} setValue={setPassword}/>

            <ActionButton name={loginActionButton.name} id={loginActionButton.id} text={loginActionButton.text}
                          className={classNames.loginButton} type={loginActionButton.type}
                          label={loginActionButton.label}/>

            <ActionButton name={registerActionButton.name} id={registerActionButton.id} text={registerActionButton.text}
                          className={classNames.registerButton} type={registerActionButton.type}
                          onClick={(event) => handleRegistration(event)} label={registerActionButton.label}/>
        </form>
    )
}

export default AuthenticationForm;