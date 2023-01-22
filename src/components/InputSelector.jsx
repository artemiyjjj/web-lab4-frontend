import React from "react";
import {useDispatch} from "react-redux";

const InputSelector = ({setValue, options, className, name, label, header, isRequired}) => {

    const listItems = options.map((option) =>
        <option value={option} key={option.toString()}>{option}</option>
    );

    return (
        <label className={className} htmlFor={name}>
            {label}
            <select id={name} name={name + "_select"}
                    className={className + "_select"}
                    onChange={setValue} required={isRequired}
            defaultValue={header}>
                <option disabled> {header} </option>
                {listItems}
            </select>
        </label>
    )
}

export default InputSelector;
