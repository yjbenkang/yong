import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "../screens/Home";
import Post from "../screens/Post";

export default ()=> {
    return (
        <Router>
            <Route exact path="/" render={(props) => <Home {...props}/>} />
            <Route path="/posts/:id" render={(props) => <Post {...props}/>} />
            {/* <Route path="/posts/:id/upload" render={(props) => <UploadPost {...props}/>} /> */}
        </Router>
    )
}
// 오류 해결 출처:https://nyang-in.tistory.com/228