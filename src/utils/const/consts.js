import {paths} from "src/utils/const/route.js";
import cursorLogo from "media/cursor-button.svg";
import homeLogo from "media/home-button.svg";
import signOutSvg from "media/sign-out-button.svg"

export const storageConsts = {
    jwt: "access",
    user: "user"
}

export const paramsForLink = {
    loginParams: {
        path: paths.login,
        alt: "Jump to the login page"
    },
    signOutParams: {
        path: paths.login,
        alt: "Sign out",
        imgSrc: signOutSvg
    },
    homeParams: {
        path: paths.homeINC,
        alt: "Jump to home page",
        imgSrc: homeLogo
    },
    mainParams: {
        path: paths.mainINC,
        alt: "Jump to main page",
        imgSrc: cursorLogo
    },
    defaultParams: {
        path: paths.default,
        alt: "Jump to home page",
        imgSrc: homeLogo
    }
}

export const classNames = {
    header: "header-wrapper",
    headerMain: "header-main",
    headerPart: "header-part",
    homeButton: "navigation-button",
    signOutButton: "signOut-button",
    headerLogo: "header-logo",
}

export const info = {
    name: "Romanov Artemiy",
    group: "P32302",
    variant: "621723"
}