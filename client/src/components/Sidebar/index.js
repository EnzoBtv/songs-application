import React from "react";

import Logo from "../../assets/img/logo-sp.png";

import classes from "./index.module.css";

export default function Sidebar() {
    return (
        <div className={classes["sidebar"]}>
            <img src={Logo} alt="Logo" className={classes["logo"]} />
        </div>
    );
}
