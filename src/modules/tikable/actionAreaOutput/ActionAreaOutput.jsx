import React, {useRef} from "react";
import {useSelector} from "react-redux";
import Axis from "./axis/Axis.jsx";

const ActionAreaOutput = () => {

    return (
        <div className="action-area__output">
            <Axis />
            {/*<AxisNew scaling={r}/>*/}
        </div>
    )
}

export default ActionAreaOutput;
