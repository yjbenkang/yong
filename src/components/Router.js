import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../screens/Home";
import Post from "../screens/Post";
import { UploadPost } from "../screens/UploadPost";
import { EditPost } from "../screens/EditPost";
import Login from "../screens/Login";
import Join from "../screens/Join";

export default (props)=> {
    return (
        <Router>
            <Route exact path="/" render={(props) => <Home {...props}/>} />
            <Route exact path="/join" render={(props) => <Join {...props}/>} />
            <Route exact path="/login" render={(props) => <Login {...props}/>} />
            
            <Route path="/posts/upload" render={(props) => <UploadPost {...props}/>} />
            <Route exact path="/posts/:id" render={(props) => <Post {...props}/>} />
            <Route path="/posts/:id/edit" render={(props) => <EditPost {...props}/>} />
        </Router>
    )
}
// 오류 해결 출처:https://nyang-in.tistory.com/228