import React, { Component } from "react";
import { toast } from "react-toastify";

import Search from "../../components/Search";
import SongList from "../../components/SongList";

import { Client } from "../../util/http";

import classes from "./index.module.css";

export default class Home extends Component {
    state = {
        search: "",
        songs: []
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

    getSelectedSong = selectedSong => {
        const selecteds =
            this.state.songs.filter(song => song.selected).length > 4;
        if (selecteds && !selectedSong.selected) {
            return toast.error("Você só pode selecionar 5 músicas");
        }

        const songIndex = this.state.songs.findIndex(
            song => selectedSong.id === song.id
        );

        this.state.songs[songIndex].selected = !this.state.songs[songIndex]
            .selected;
        this.setState({ songs: this.state.songs });
    };

    render = () => {
        return (
            <div className={classes["home-container"]}>
                <Search changeSearchHandler={this.changeSearchHandler} />
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
