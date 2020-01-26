import React from "react";

import Button from "../Layout/Button/index";

import classes from "./index.module.css";

export default function Search({ changeSearchHandler }) {
    return (
        <div className={classes["search-container"]}>
            <input
                onChange={evt => changeSearchHandler(evt.target.value)}
                placeholder="Pesquise por uma música"
                className={classes["search-input"]}
            />
            <Button>Votar</Button>
        </div>
    );
}
