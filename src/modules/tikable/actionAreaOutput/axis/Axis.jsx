import React, {useEffect, useRef} from "react";
import * as d3 from "d3";
import {useSelector} from "react-redux";
import {useMakeShotMutation} from "../../../../store/slices/api/controllerServlet/controllerServletApi.js";
import d3Consts from "./const/consts.js";
import {handleClick} from "./utils/clickHandling.js";

const width = d3Consts.width;
const height = d3Consts.height;
const offset = d3Consts.offset;
const svgWidth = d3Consts.widthWithOffset;
const svgHeight = d3Consts.heightWithOffset;
const centerWidth = offset + width / 2,
    centerHeight = offset + height / 2;
const data = d3Consts.data;
const tickValues = d3Consts.tickValues;

const Axis = () => {
    const [makeShot] = useMakeShotMutation();

    const d3Axis = useRef();
    const r = useSelector(state => state.inputFormSlice.r);

    useEffect(() => {
            updateAxis()
        }, [d3Axis, r]
    )

    function updateAxis() {
        if (d3Axis) {
            const svg = d3.select(d3Axis.current)

            svg.append("rect")
                .attr("class", "svg")
                .attr("x", 0)
                .attr("y", 0)
                .attr("width", svgWidth)
                .attr("height", svgHeight);
            //add rectangle

            svg.append("rect")
                .attr("class", "svg__rect")
                .attr("x", centerWidth)
                .attr("y", centerHeight - height / 6 * 2 * (1 / r))
                .attr("width", width / 6 * (1 / r))
                .attr("height", height / 6 * 2 * (1 / r));
            // add arc

            let arc = d3.arc()
                .innerRadius(0)
                .outerRadius(width / 6 * 2 * (1 / r))
                .startAngle(3.14)
                .endAngle(3.14 + 1.57)

            svg.append("path")
                .attr("class", "svg__arc")
                .attr("transform", `translate(${centerWidth}, ${centerHeight})`)
                .attr("d", arc)
            // add triangle

            svg.append("polygon")
                .attr("class", "svg__triangle")
                .attr("points", `${centerWidth},${centerHeight} ${centerWidth + width / 6 * 2 * (1 / r)},${centerHeight} ${centerWidth},${centerHeight + height / 6 * 2 * (1 / r)}`);
            // create scales

            let x_scale = d3.scaleLinear()
                .domain([d3.min(data), d3.max(data)])
                .range([0, width]);

            let y_scale = d3.scaleLinear()
                .domain([d3.min(data), d3.max(data)])
                .range([height, 0]);

            let x_axis = d3.axisBottom()
                .scale(x_scale)
                .tickValues([-1, -0.5, 0.5, 1])
                .tickFormat((d, i) => tickValues[i]);

            let y_axis = d3.axisLeft()
                .scale(y_scale)
                .tickValues([-1, -0.5, 0.5, 1])
                .tickFormat((d, i) => tickValues[i]);
            // add scales

            svg.append("g")
                .attr("class", "svg__y-axis")
                .attr("transform", `translate(${offset + width / 2}, ${offset})`)
                .call(y_axis);
            svg.append("g")
                .attr("class", "svg__x-axis")
                .attr("transform", `translate(${offset}, ${height / 2 + offset})`)
                .call(x_axis)

        }

    }

    // const axisClickStorage = useSelector(state => state.clickSlice.shots)
    // console.log(shots);
    // const clickShots = shots.map((shot) => {return <circle radius="20px" x={shot.x} y={shot.y}/>} )

    return (
        <svg id="svg-root" ref={d3Axis} width={d3Consts.widthWithOffset} height={d3Consts.heightWithOffset}
             onClick={(event) => makeShot(handleClick({event, r, width : svgWidth, height: svgHeight, offset, numX: data.length, numY: data.length}))}>
        </svg>

    )
}

export default Axis;
