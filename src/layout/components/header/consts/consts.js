import {paths} from "../../../navigation/routes.js";
import cursorLogo from "../../../../logos/cursor-button.svg";
import homeLogo from "../../../../logos/home-button.svg";

export const paramsForLink = {
    mainParams: {
        path: paths.main,
        alt: "Jump to main page",
        imgSrc: cursorLogo
    },
    defaultParams: {
        path: paths.default,
        alt: "Jump to home page",
        imgSrc: homeLogo
    }
}