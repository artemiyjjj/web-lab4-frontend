import React from "react";
import {Link, useLocation} from "react-router-dom";
import {paramsForLink} from "./consts/consts.js";
import {paths} from "../../navigation/routes.js";

const Header = () => {

    function chooseLink() {
        switch (location.pathname) {
            case paths.main:
                return paramsForLink.defaultParams;
            case paths.default:
                return paramsForLink.mainParams;
            default:
                return paramsForLink.defaultParams;
        }
    }

    const location = useLocation();
    const currentLinkParams = chooseLink();

    const link = <Link to={currentLinkParams.path} className="navigation-button">
        <img src={currentLinkParams.imgSrc} className="header-logo" alt={currentLinkParams.alt}/>
    </Link>

    return (
        <header className="header-wrapper">
            {link}
            <h2 className="headers">Romanov Artemiy</h2>
            <h2 className="headers">P32302</h2>
            <h2 className="headers">3112</h2>
        </header>
    )
}

export default Header;