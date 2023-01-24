import Link from "next/link";
import {useState} from "react";
import {
    loginInputField,
    passwordInputField,
    firstNameInputField,
    loginActionButton,
    registerActionButton,
    anotherAuthLink,
    classNames
} from "../loginLayout/consts/formConsts.js";
import ActionButton from "src/components/ActionButton.jsx";
import InputField from "src/components/InputField.jsx";

const AuthenticationForm = ({handleSubmit, authType}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");

    function chooseAuthType() {
        switch (authType) {
            case "login":
                return {params: loginActionButton, className: classNames.loginButton, type: "login"};
            case "signUp":
                return {params: registerActionButton, className: classNames.registerButton, type: "signUp"};
            default:
                break;
        }
    }

    function onSubmit(event) {
        event.preventDefault();
        const body = {
            username,
            password
        }
        if (authData.type === "signUp") {
            body.firstName = firstName;
        }
        handleSubmit(body);
    }

    const authData = chooseAuthType();
    const submitButtonClass = authData.className;
    const submitButtonParams = authData.params;

    const additionalData = authData.type === "signUp" ?
        {
            hidden: false,
            isRequired: true,
            data: anotherAuthLink.login,
        }
        : {
            hidden: true,
            isRequired: false,
            data: anotherAuthLink.signUp,
        };

    const additional = <InputField name={firstNameInputField.name} placeholder={firstNameInputField.placeholder}
                                   type={firstNameInputField.type} label={firstNameInputField.label}
                                   isRequired={additionalData.isRequired} className={classNames.firstNameFieldClass}
                                   onChange={(event) => setFirstName(event.target.value)}/>


    return (
        <form className={classNames.formClass} onSubmit={onSubmit}>

            <InputField name={loginInputField.name} placeholder={loginInputField.placeholder}
                        type={loginInputField.type}
                        label={loginInputField.label} isRequired={loginInputField.isRequired}
                        className={classNames.loginFieldClass} onChange={(event) => setUsername(event.target.value)}/>

            <InputField name={passwordInputField.name} placeholder={passwordInputField.placeholder}
                        type={passwordInputField.type}
                        label={passwordInputField.label} isRequired={passwordInputField.isRequired}
                        className={classNames.passwordFieldClass}
                        onChange={(event) => setPassword(event.target.value)}/>

            {authData.type === "signUp" && additional}

            <ActionButton name={submitButtonParams.name} id={submitButtonParams.id} text={submitButtonParams.text}
                          className={submitButtonClass} type={submitButtonParams.type}
                          label={submitButtonClass.label}/>

            <p>{additionalData.data.label}</p>
            <Link href={additionalData.data.href} className={classNames.anotherAuth}>{additionalData.data.text}</Link>


        </form>
    )
}

export default AuthenticationForm;