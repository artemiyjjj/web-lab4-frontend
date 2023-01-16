import React from "react";
import {useDispatch} from "react-redux";

const InputField = ({className, name, label, placeholder, isRequired, setValue, min, max, type}) => {

    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(setValue(event.target.value))
    }

    return (
        <label className={className} htmlFor={name}>
            {label}
            <input id={name} name={name + "_field"} type={type}
                   className={className + "_field"} min={min} max={max}
                   placeholder={placeholder} required={isRequired}
                   onChange={handleChange}  />
        </label>
    )
}

export default InputField;
