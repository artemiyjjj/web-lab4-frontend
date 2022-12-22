import React from "react";

const Button = (props) => {

    return (
        <button type={props.type} id={props.id}
                className={props.className} name={props.name}
                onClick={props.onClick} value={props.value}>
            {props.text}
        </button>
    )
}

export default Button;
