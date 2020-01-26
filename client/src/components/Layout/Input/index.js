import React from "react";

import classes from "./index.module.css";

export default function Input(props) {
    const className = [classes["base-input"]];
    if (props.large) className.push(classes["large-input"]);
    else className.push(classes["medium-input"]);

    let component = (
        <input
            value={props.value}
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.onChange}
            className={className.join(" ")}
        />
    );

    if (props.select) {
        component = (
            <select
                value={props.value}
                onChange={props.onChange}
                className={className.join(" ")}
            >
                {props.children}
            </select>
        );
    }

    return component;
}
