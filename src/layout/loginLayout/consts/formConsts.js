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
        text: "Register",
        type: "button",
        label: "For new users ->"
    }

}

export const classNames = {
    layoutClass: "login-page",
    formClass: "login-page__login-form",
    loginFieldClass: "login-page__login-form__login",
    passwordFieldClass: "login-page__login-form__password",
    loginButton: "login-page__login-form__login-button",
    registerButton: "login-page__login-form__register-button"
}
export const {
    loginInputField,
    passwordInputField,
    loginActionButton,
    registerActionButton
} = formConsts;