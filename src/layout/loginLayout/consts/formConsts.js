import {paths} from "src/utils/const/route.js";

const formConsts = {
    loginInputField: {
        name: "loginInput",
        label: "Login:",
        placeholder: "Insert your login",
        type: "text",
        isRequired: true,
    },
    passwordInputField: {
        name: "passwordInput",
        label: "Password",
        placeholder: "Insert your password",
        type: "password",
        isRequired: true,
    },
    firstNameInputField: {
        name: "firstNameInput",
        label : "First name",
        placeholder: "What is your name?",
        type: "text",
        isRequired: true
    },
    loginActionButton: {
        name: "submitLoginButton",
        id: "login-button",
        text: "Login",
        type: "submit",
        label: "If you have already registered ->"
    },
    registerActionButton: {
        name: "submitRegisterButton",
        id: "register-button",
        text: "Sign Up",
        type: "submit",
        label: "For new users ->"
    },
    anotherAuthLink: {
        login: {
            label: "Have already registered?",
            text: "Go to login page!",
            href: paths.login
        },
        signUp: {
            label: "Haven't registered yet?",
            text: "Sign up",
            href: paths.signUp,
        }
    }

}

export const authTypes = {
    login: "login",
    signUp: "signUp",
}

export const classNames = {
    layoutClass: "login-page",
    formClass: "login-page__login-form",
    loginFieldClass: "login-page__login-form__login",
    passwordFieldClass: "login-page__login-form__password",
    firstNameFieldClass: "login-page__login-form__first-name",
    loginButton: "login-page__login-form__login-button",
    registerButton: "login-page__login-form__register-button",
    anotherAuth: "login-page__login-form__link",
}
export const {
    loginInputField,
    passwordInputField,
    firstNameInputField,
    loginActionButton,
    registerActionButton,
    anotherAuthLink,
} = formConsts;