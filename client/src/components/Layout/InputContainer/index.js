import React from "react";

import classes from "./index.module.css";

export default function InputContainer(props) {
    const className = [classes["base-input-container"]];
    if (props.double) className.push(classes["double-input-container"]);

    return <div className={className.join(" ")}>{props.children}</div>;
}
