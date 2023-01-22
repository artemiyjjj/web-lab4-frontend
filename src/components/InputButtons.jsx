import React from "react";
import {useDispatch} from "react-redux";
import Button from "src/components/Button.jsx";

let classNames = require('classnames');

const InputButtons = ({options, className, name, selectedClassName, selectedValue, setValue, label}) => {

    const listItems = options.map((value) => {
            const finalClassName = classNames(className + "_button", {
                    [selectedClassName + "-button"]: selectedValue == value
                }
            );

            return <Button className={finalClassName}
                           type="button" key={value.toString()} value={value}
                           name={name} id={name + value.toString()}
                           text={value} onClick={setValue}/>
        }
    );

    return (
        <label className={className}>
            {label}
            {listItems}
        </label>
    )
}

export default InputButtons;
