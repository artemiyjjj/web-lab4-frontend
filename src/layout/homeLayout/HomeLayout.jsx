import Link from "next/link";
import {useSelector} from "react-redux";

import Clock from "./components/clock/Clock.jsx";
import UserStats from "src/layout/homeLayout/components/userStats/UserStats.jsx";
import {paths} from "src/utils/const/route.js";

const HomeLayout = () => {
    const user = useSelector(state => state.userSlice.user);

    return (
        <>
            <div className="home-container">
                <UserStats/>
                <Clock/>
                <Link href={`/${user.login}${paths.mainINC}`} className="home-container__link">
                    Go to the main page!</Link>
            </div>
        </>
    );
}

export default HomeLayout;