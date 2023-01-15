import React, {useRef} from "react";
import {useSelector} from "react-redux";
import Axis from "./axis/Axis.jsx";

const ActionAreaOutput = () => {

    const r = useSelector(state => state.inputFormSlice.r);
    const ref = useRef();

    return (
        <div className="action-area__output">
            <Axis scaling={r} ref={ref}/>
            {/*<AxisNew scaling={r}/>*/}
        </div>
    )
}

export default ActionAreaOutput;
