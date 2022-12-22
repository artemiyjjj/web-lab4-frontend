import React from "react";
import {useDispatch} from "react-redux";

const InputSelector = (props) => {

    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(props.setValue(event.target.value))
    }

    const listItems = props.options.map((option) =>
        <option value={option} key={option.toString()}>{option}</option>
    );

    return (
        <label className={props.className} htmlFor={props.name}>
            {props.label}
            <select id={props.name} name={props.name + "_select"}
                    className={props.className + "_select"}
                    onChange={handleChange} required={props.isRequired}
            defaultValue={props.header}>
                <option disabled> {props.header} </option>
                {listItems}
            </select>
        </label>
    )
}

export default InputSelector;
