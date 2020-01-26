import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Sidebar from "../Sidebar";
import Home from "../../pages/Home";
import "../../assets/styles/Shared.css";

export default function App() {
    return (
        <>
            <ToastContainer
                autoClose={7000}
                pauseOnFocusLoss={false}
                pauseOnHover={false}
            />
            <Sidebar />
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
        </>
    );
}
