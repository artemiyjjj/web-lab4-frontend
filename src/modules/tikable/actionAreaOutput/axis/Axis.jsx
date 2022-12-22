import React, {useEffect, useRef} from "react";
import * as d3 from "d3";
import {d3Consts} from "./const/consts.js";

const Axis = () => {

    const d3Axis = useRef();

    useEffect(() => {
        // console.log(d3Axis)
        if(d3Axis){
            const svg = d3.select(d3Axis.current)

            const width = d3Consts.width;
            const height = d3Consts.height;
            const offset = d3Consts.offset;
            const svgWidth = d3Consts.widthWithOffset;
            const svgHeight = d3Consts.heightWithOffset;

            let data = [-1.5, -1, -0.5, 0, 0.5, 1, 1.5];
            let tickValues = ["-R", "-R/2", "R/2", "R"];

            let centerWidth = offset + width / 2,
                centerHeight = offset + height / 2;

            // add click area to cover whole svg
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
                .attr("y", centerHeight - height / 6 * 2)
                .attr("width", width / 6)
                .attr("height", height / 6 * 2);

            // add arc
            let arc = d3.arc()
                .innerRadius(0)
                .outerRadius(width / 6 * 2)
                .startAngle(3.14)
                .endAngle(3.14 + 1.57)

            svg.append("path")
                .attr("class", "svg__arc")
                .attr("transform", `translate(${centerWidth}, ${centerHeight})`)
                .attr("d", arc)

            // add triangle
            svg.append("polygon")
                .attr("class", "svg__triangle")
                .attr("points", `${centerWidth},${centerHeight} ${centerWidth + width / 6 * 2},${centerHeight} ${centerWidth},${centerHeight + height / 6 * 2}`);

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

    },[d3Axis])

    return (
        <svg ref={d3Axis} width={d3Consts.widthWithOffset} height={d3Consts.heightWithOffset}></svg>    )
}

export default Axis;
