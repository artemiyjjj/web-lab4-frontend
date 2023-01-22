import Link from "next/link";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {paths} from "src/utils/const/route.js";
import {paramsForLink, classNames, info} from "src/utils/const/consts.js";

const Header = () => {

    const userLogin = useSelector(state => state.userSlice.user.login);

    function chooseLink() {
        console.log("current ", router.asPath);
        switch (router.asPath) {
            case userLogin + paths.mainINC:
                return paramsForLink.defaultParams;
            case userLogin + paths.default:
                return paramsForLink.mainParams;
            default:
                return paramsForLink.defaultParams;
        }
    }

    const router = useRouter();
    const {path, alt, imgSrc} = chooseLink();

    const link = <Link href={path} className={classNames.homeButton}>
        <img src={imgSrc} className={classNames.headerLogo} alt={alt}/>
    </Link>

    const signOut = paramsForLink.signOutParams;
    const signOutLink = <Link href={paths.login} className={classNames.signOutButton}>
        <img src={signOut.imgSrc} className={classNames.headerLogo} alt={signOut.alt}/>
    </Link>

    return (
        <header className={classNames.header}>
            {link}
            <h2 className={classNames.headerPart}>{info.name}</h2>
            <h2 className={classNames.headerPart}>{info.group}</h2>
            <h2 className={classNames.headerPart}>{info.variant}</h2>
            {signOutLink}
        </header>
    )
}

export default Header;