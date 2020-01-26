import React from "react";

import Logo from "../../assets/img/logo-sp.png";

import classes from "./index.module.css";

export default function Sidebar(props) {
    return (
        <div className={classes["sidebar"]}>
            <img src={Logo} alt="Logo" className={classes["logo"]} />
            <div className={classes["list-container"]}>
                {props.adminSongUsers.map(user => (
                    <div className={classes["list-item-container"]}>
                        <span className={classes["list-item-text"]}>
                            {user.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
