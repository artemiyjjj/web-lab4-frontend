import {useSelector} from "react-redux";
import {classNames, userTableHeaders} from "src/layout/homeLayout/components/userStats/consts/consts.js";

const userStats = () => {
    const userData = useSelector(state => state.userSlice.user);

    return (
        <table className={classNames.table}>
            <thead className={classNames.tableHead}>
                <tr>
                    <th className={classNames.tableHeader}>{userTableHeaders.name}</th>
                    <th className={classNames.tableHeader}>{userTableHeaders.amountOfShotsMade}</th>
                    <th className={classNames.tableHeader}>{userTableHeaders.registrationDate}</th>
                </tr>
            </thead>
            <tbody className={classNames.tableBody}>
                <tr>
                    <td className={classNames.tableCell}>{userData.data.name}</td>
                    <td className={classNames.tableCell}>{userData.data.shotsMade}</td>
                    <td className={classNames.tableCell}>{userData.data.registrationTime}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default userStats;