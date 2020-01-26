import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Sidebar from "../Sidebar";
import Home from "../../pages/Home";
import Admin from "../../pages/Admin";
import "../../assets/styles/Shared.css";

export default class App extends Component {
    state = {
        adminSongUsers: []
    };

    getSongUsers = adminSongUsers => {
        this.setState({ adminSongUsers });
    };

    render() {
        return (
            <>
                <ToastContainer
                    autoClose={7000}
                    pauseOnFocusLoss={false}
                    pauseOnHover={false}
                />
                <Sidebar adminSongUsers={this.state.adminSongUsers} />
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route
                            exact
                            path="/admin"
                            render={() => (
                                <Admin getSongUsers={this.getSongUsers} />
                            )}
                        />
                    </Switch>
                </Router>
            </>
        );
    }
}
