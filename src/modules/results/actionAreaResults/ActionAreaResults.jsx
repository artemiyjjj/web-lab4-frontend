import React from "react";
import {useSelector} from "react-redux";

const ActionAreaResults = () => {

    const {shots} = useSelector(state => state.tableResultsSlice);

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
                    <th>Execution, ns</th>
                    <th>Time</th>
                </tr>
                </thead>
                <tbody id="tableDataRoot" className="action-area__results__history-table_body">
                {
                    Array.from(shots).map((shot) => (
                        <tr key={shot.id} className="action-area__results__history-table__table-element">
                            <td>{shot.x}</td>
                            <td>{shot.y}</td>
                            <td>{shot.r}</td>
                            <td>{shot.hit.toString()}</td>
                            <td>{shot?.executionTime}</td>
                            {/*<td>{new Date(shot?.currentTime).toLocaleString()}</td>*/}
                        </tr>)).reverse()
                }
                </tbody>
            </table>
        </div>
    )
}

export default ActionAreaResults;
