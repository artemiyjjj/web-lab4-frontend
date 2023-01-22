import React from "react";
import Button from "src/components/Button.jsx";

const ActionButton = ({className, name, type, text, id, label}) => {

    return (
        <label className={className} htmlFor={id}>
            {label}
            <Button type={type} id={id}
                    className={className + "_button"}
                    name={name}
                    value="submit" text={text} />
        </label>
    )
}

export default ActionButton;
