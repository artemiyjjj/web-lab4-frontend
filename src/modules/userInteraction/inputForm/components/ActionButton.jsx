import React from "react";
import Button from "../../../../components/Button.jsx";

const ActionButton = (props) => {

    return (
        <label className={props.className} htmlFor={props.id}>
            <Button type={props.type} id={props.id}
                    className={props.className}
                    onClick={props.onClick} name={props.name}
                    value="submit" text={props.text} />
        </label>
    )
}

export default ActionButton;
