export function handleClick({event, r, width, height, offset, numX, numY}) {
    const {svgX, svgY} = calcSvgCoordinates(event);
    const {x, y} = calcFormCoordinates(r, svgX, svgY, width, height, offset, numX, numY);

    return {x, y, r};
}

function calcSvgCoordinates(event) {
    const svgRoot = event.target;
    const coordinates = svgRoot.getBoundingClientRect();

    const svgX = Math.round(event.clientX - coordinates.left);
    const svgY = Math.round(event.clientY - coordinates.top);

    console.log("coords",svgX, svgY);
    return {svgX, svgY};
}

function calcFormCoordinates(r, svgX, svgY, width, height, offset, numX, numY) {
    const halfWidthPx = width / 2;
    const halfHeightPx = height / 2;

    const singlePeriodForXPx = (halfWidthPx - offset) / Math.floor(numX / 2);
    const singlePeriodForYPx = (halfHeightPx - offset) / Math.floor(numY / 2);

    const xPx = svgX - halfWidthPx;
    const yPx = halfHeightPx - svgY;

    let x = xPx / singlePeriodForXPx * r / 2;
    let y = yPx / singlePeriodForYPx * r / 2;

    x = Math.round(x * 1000) / 1000;
    y = Math.round(y * 1000) / 1000;

    console.log(x.toString() + "  " + y.toString());

    return {
        x: x.toString(),
        y: y.toString()
    };
}