import Link from "next/link";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "src/store/slices/userSlice.js";
import {paths} from "src/utils/const/route.js";
import {paramsForLink, classNames, info, storageConsts} from "src/utils/const/consts.js";

const Header = () => {
    const router = useRouter();
    const user = useSelector(state => state.userSlice.user);
    const currentHref = router.asPath;
    const dispatch = useDispatch();

    function chooseLink() {
        switch (currentHref) {
            case "/" + user.login + paths.mainINC:
                return paramsForLink.defaultParams;
            case "/" + user.login + paths.homeINC:
                return paramsForLink.mainParams;
            default:
                return paramsForLink.defaultParams;
        }
    }

    function handleSignOut() {
        localStorage.removeItem(storageConsts.jwt);
        localStorage.removeItem(storageConsts.user);
        dispatch(userActions.setInitialUserState());
    }

    function showIcons() {
        return currentHref === "/" + user.login + paths.mainINC || currentHref === "/" + user.login + paths.homeINC;
    }

    const {path, alt, imgSrc} = chooseLink();

    const link = <Link href={`/${user.login}${path}`} className={classNames.homeButton}>
        <img src={imgSrc} className={classNames.headerLogo} alt={alt}/>
    </Link>

    const emptyLogo = <div className={classNames.headerLogo}/>;

    const signOut = paramsForLink.signOutParams;
    const signOutLink = <Link href={paths.login} className={classNames.signOutButton} onClick={handleSignOut}>
        <img src={signOut.imgSrc} className={classNames.headerLogo} alt={signOut.alt}/>
    </Link>

    return (
        <header className={classNames.header}>
            {showIcons() ? link : emptyLogo}
            <div className={classNames.headerMain}>
                <h2 className={classNames.headerPart}>{info.name}</h2>
                <h2 className={classNames.headerPart}>{info.group}</h2>
                <h2 className={classNames.headerPart}>{info.variant}</h2>
            </div>
            {showIcons() ? signOutLink : emptyLogo}
        </header>
    )
}

export default Header;