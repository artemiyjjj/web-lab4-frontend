import React from "react";
import Button from "../../../../components/Button.jsx";

const ActionButton = ({className, name, type, text, id}) => {

    return (
        <label className={className} htmlFor={id}>
            <Button type={type} id={id}
                    className={className}
                    name={name}
                    value="submit" text={text} />
        </label>
    )
}

export default ActionButton;
