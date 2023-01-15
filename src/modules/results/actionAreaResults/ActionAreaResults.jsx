import React, {useEffect, useRef} from "react";
import {useSelector} from "react-redux";
import {useGetTableDataQuery} from "../../../store/slices/api/controllerServlet/controllerServletApi.js";

const ActionAreaResults = () => {
    const reusltTable = useRef();

    // const {shots} = useSelector(state => state.tableResultsSlice);
    // const {tableData = [], isLoading} = useGetTableDataQuery();
    // if (isLoading) {
    //     return <h2>Loading...</h2>
    // }
    // console.log(tableData);
    return (
        <div className="action-area__results">
            <table className="action-area__results__history-table">
                <thead>
                <tr className="action-area__results__history-table__table-header">
                    <th>X</th>
                    <th>Y</th>
                    <th>R</th>
                    <th>Result</th>
                    <th>Time</th>
                    <th>Execution</th>
                </tr>
                </thead>
                <tbody id="tableDataRoot" className="action-area__results__history-table_body">
                {
                    // tableData.map((shot) => (
                    //     <tr key={shot.id} className="action-area__results__history-table__table-element">
                    //         <td>{shot.coordinates.x}</td>
                    //         <td>{shot.coordinates.y}</td>
                    //         <td>{shot.coordinates.r}</td>
                    //         <td>{shot.hit.toString()}</td>
                    //         <td>{shot.executionTime}</td>
                    //         <td>{shot.currentTime}</td>
                    //     </tr>))
                }
                </tbody>
            </table>
        </div>
    )
}

export default ActionAreaResults;
