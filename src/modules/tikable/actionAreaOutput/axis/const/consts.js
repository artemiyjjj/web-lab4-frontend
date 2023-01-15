
const svgWidth = 400;
const svgHeight = 400;
const svgOffset = 10;

const data = [-1.5, -1, -0.5, 0, 0.5, 1, 1.5];
const tickValues = ["-R", "-R/2", "R/2", "R"];

export const formInputs = {
    xInput: "xInput",
    yInput: "yInput",
    rInput: "rInput",
}

export default {
    data,
    tickValues,
    width: svgWidth,
    height: svgHeight,
    offset: svgOffset,
    widthWithOffset: svgWidth + svgOffset * 2,
    heightWithOffset: svgHeight + svgOffset * 2,
}
