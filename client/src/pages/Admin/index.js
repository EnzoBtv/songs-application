import React, { Component } from "react";
import { toast } from "react-toastify";

import SongAdminList from "../../components/SongAdminList";

import { Client } from "../../util/http";

import classes from "./index.module.css";

export default class Admin extends Component {
    state = {
        songs: []
    };

    async componentWillMount() {
        try {
            if (!this.state.songs.length)
                this.setState({ songs: await Client.get("/admin") });
        } catch (ex) {
            toast.error(ex.message);
        }
    }

    render = () => {
        return (
            <div className={classes["list-container"]}>
                <SongAdminList
                    getSongUsers={this.props.getSongUsers}
                    songs={this.state.songs}
                />
            </div>
        );
    };
}
