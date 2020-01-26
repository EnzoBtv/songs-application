import React from "react";

import classes from "./index.module.css";

export default function Button(props) {
    const className = [classes.button];
    if (props.white) className.push(classes["button-white"]);
    else className.push(classes["button-transparent"]);

    return (
        <button onClick={props.onClick} className={className.join(" ")}>
            {props.children}
        </button>
    );
}
