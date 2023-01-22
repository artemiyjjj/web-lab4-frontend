import {useRouter} from "next/router";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {paths} from "src/utils/const/route.js";

const StartingPage = () => {
    const router = useRouter();
    const userLogin = useSelector(state => state.userSlice.user.login);

    useEffect(()=>{
        router.push(userLogin + paths.homeINC);
    },[])
    return null;
}
export default StartingPage;