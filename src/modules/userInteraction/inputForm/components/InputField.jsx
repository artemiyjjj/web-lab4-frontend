import React from "react";
import {useDispatch} from "react-redux";

const InputField = (props) => {

    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(props.setValue(event.target.value))
    }

    return (
        <label className={props.className} htmlFor={props.name}>
            {props.label}
            <input id={props.name} name={props.name + "_field"}
                   className={props.className + "_field"}
                   placeholder={props.placeholder} required={props.isRequired}
                   onChange={handleChange} type="text" />
        </label>
    )
}

export default InputField;
