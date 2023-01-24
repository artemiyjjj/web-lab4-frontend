import {useRouter} from "next/router";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {paths} from "src/utils/const/route.js";

const StartingPage = () => {
    const router = useRouter();
    const user = useSelector(state => state.userSlice.user);

    useEffect(() => {
        if (!user.isAuthorized) {
            router.push(paths.default);
        } else {
            router.push(`/${user.login}${paths.homeINC}`);
        }
    }, [user])
    return null;
}
export default StartingPage;