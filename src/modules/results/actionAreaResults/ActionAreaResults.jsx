import React from "react";
import {useSelector} from "react-redux";
import {useGetTableDataQuery} from "../../../store/slices/api/controllerServlet/controllerServletApi.js";

const ActionAreaResults = () => {
    // const {data, isLoading} = useGetTableDataQuery()

    const {shots} = useSelector(state => state.tableResultsSlice);

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
                {shots.map((shot)=> (<tr key={shot.id}>
                    <td>{shot.coordinates.x}</td>
                    <td>{shot.coordinates.y}</td>
                    <td>{shot.coordinates.r}</td>
                    <td>{shot.hit.toString()}</td>
                    <td>{shot.executionTime}</td>
                    <td>{shot.currentTime}</td>
                </tr>))
                }
                </tbody>
            </table>
        </div>
    )
}

export default ActionAreaResults;
