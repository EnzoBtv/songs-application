import React from "react";
import classes from "./index.module.css";

export default function SongsList(props) {
    const { songs } = props;
    return (
        <div className={classes["list-container"]}>
            {songs.map((song, index) => {
                return (
                    <div
                        onClick={() => props.getSongUsers(song.users)}
                        key={song.id}
                        className={classes["list-item-container"]}
                    >
                        <span style={{ fontSize: "20px" }}>{index + 1}º</span>
                        <div className={classes["list-text-container"]}>
                            <span className={classes["title-item"]}>
                                {song.name}
                            </span>
                            <span className={classes["title-item"]}>
                                {song.artists}
                            </span>
                        </div>
                        <div className={classes["list-text-container"]}>
                            <span className={classes["subtitle-item"]}>
                                {song.points} Points
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
