import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../screens/Home";
export default ()=> {
    return (
        <Router>
            <Route path="/" exact component={Home}/>
        </Router>
    )
}