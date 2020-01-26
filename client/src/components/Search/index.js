import React from "react";

import Button from "../Layout/Button/index";

import classes from "./index.module.css";

export default function Search({
    changeSearchHandler,
    changeNameHandler,
    handleVote
}) {
    return (
        <div className={classes["search-container"]}>
            <input
                onChange={evt => changeSearchHandler(evt.target.value)}
                placeholder="Search for a song"
                className={classes["search-input"]}
            />
            <input
                onChange={evt => changeNameHandler(evt.target.value)}
                placeholder="Enter your name"
                className={classes["search-input"]}
            />
            <Button onClick={handleVote}>Vote</Button>
        </div>
    );
}
