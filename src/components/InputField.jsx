import React from "react";
import {useDispatch} from "react-redux";

const InputField = ({className, name, label, placeholder, isRequired, setValue, min, max, type}) => {

    return (
        <label className={className} htmlFor={name}>
            {label}
            <input id={name} name={name + "_field"} type={type}
                   className={className + "_field"} min={min} max={max}
                   placeholder={placeholder} required={isRequired}
                   onChange={setValue}  />
        </label>
    )
}

export default InputField;
