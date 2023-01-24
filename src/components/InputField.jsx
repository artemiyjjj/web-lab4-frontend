import React from "react";

const InputField = ({className, name, label, placeholder, isRequired, min, max, type, onChange, value}) => {

    return (
        <label className={className} htmlFor={name}>
            {label}
            <input id={name} name={name + "_field"} type={type}
                   className={className + "_field"} min={min} max={max}
                   placeholder={placeholder} required={isRequired}
                   onChange={onChange} value={value}/>
        </label>
    )
}

export default InputField;
