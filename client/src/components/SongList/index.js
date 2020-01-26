import React from "react";
import classes from "./index.module.css";

export default function SongsList(props) {
    const { songs, search } = props;
    return (
        <div className={classes["list-container"]}>
            {songs.map(song => {
                let style = {};
                if (song.selected) {
                    style.backgroundColor = "#fff";
                    style.color = "#191414";
                }
                if (
                    !search ||
                    (search &&
                        (song.name
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                            song.artists
                                .toLowerCase()
                                .includes(search.toLowerCase())))
                )
                    return (
                        <div
                            onClick={() => props.getSelectedSong(song)}
                            key={song.id}
                            className={classes["list-item-container"]}
                            style={style}
                        >
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
                                    {song.duration}
                                </span>
                            </div>
                        </div>
                    );
            })}
        </div>
    );
}
