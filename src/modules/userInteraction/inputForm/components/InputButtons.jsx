import React from "react";
import {useDispatch} from "react-redux";
import Button from "../../../../components/Button.jsx";

let classNames = require('classnames');

const InputButtons = (props) => {

    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(props.setValue(event.target.value))
    }

    const listItems = props.options.map((value) => {
            const className = classNames(props.className + "_button", {
                [props.selectedClassName + "-button"] : props.selectedValue == value
            });
        // props.className + value === props.selectedValue ? " " + props.selectedClassName + "-button" : "";
            return <Button className={className}
                           type="button" key={value.toString()} value={value}
                           name={props.name} id={props.name + value.toString()}
                           text={value} onClick={handleChange}/>
        }
    );

    return (
        <label className={props.className}>
            {props.label}
            {listItems}
        </label>
    )
}

export default InputButtons;
