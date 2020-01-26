import React, { Component } from "react";
import { toast } from "react-toastify";

import Search from "../../components/Search";
import SongList from "../../components/SongList";

import { Client } from "../../util/http";

import classes from "./index.module.css";

export default class Home extends Component {
    state = {
        search: "",
        songs: [],
        name: ""
    };

    async componentWillMount() {
        try {
            if (!this.state.songs.length)
                this.setState({ songs: await Client.get("/songs") });
        } catch (ex) {
            toast.error(ex.message);
        }
    }

    changeSearchHandler = search => {
        this.setState({ search });
    };

    changeNameHandler = name => {
        this.setState({ name });
    };

    getSelectedSong = selectedSong => {
        const selecteds =
            this.state.songs.filter(song => song.selected).length > 4;
        if (selecteds && !selectedSong.selected) {
            return toast.error("You can only select five songs");
        }

        const songIndex = this.state.songs.findIndex(
            song => selectedSong.id === song.id
        );

        this.state.songs[songIndex].selected = !this.state.songs[songIndex]
            .selected;
        this.setState({ songs: this.state.songs });
    };

    handleVote = async () => {
        const selectedSongs = this.state.songs.filter(song => song.selected);

        if (selectedSongs.length < 5 || selectedSongs > 5) {
            return toast.error("Please select exactly five songs");
        }

        // if (!this.state.name) {
        //     return toast.error("Please enter a name");
        // }

        try {
            await Client.post("/submit", {
                name: this.state.name,
                songs: selectedSongs.map(song => song.id)
            });
            toast.success("You've voted successfully");
        } catch (ex) {
            return toast.error(ex.message || ex);
        }
    };

    render = () => {
        return (
            <div className={classes["home-container"]}>
                <Search
                    handleVote={this.handleVote}
                    changeSearchHandler={this.changeSearchHandler}
                    changeNameHandler={this.changeNameHandler}
                />
                <div className={classes["list-container"]}>
                    <SongList
                        search={this.state.search}
                        songs={this.state.songs}
                        getSelectedSong={this.getSelectedSong}
                    />
                </div>
            </div>
        );
    };
}
