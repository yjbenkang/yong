import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../screens/Home";
import Post from "../screens/Post";
import { UploadPost } from "../screens/UploadPost";
import { EditPost } from "../screens/EditPost";
import Login from "../screens/Login";
import Join from "../screens/Join";
import Profile from "../screens/Profile";
import { EditProfile } from "../screens/EditProfile";

export default (props)=> {
    const loggedInStatus = props.loggedInStatus; 
    return (
        <Router>
            <Route exact path="/" render={(props) => <Home loggedInStatus={loggedInStatus} {...props}/>} />
            <Route path="/join" render={(props) => <Join {...props}/>}>
            </Route>
            <Route path="/login" render={(props) => <Login {...props}/>} />
            <Route exact path="/users/:id" render={(props) => <Profile {...props}/>} />
            <Route path="/users/:id/edit" render={(props) => <EditProfile {...props}/>} />  
            <Route path="/posts/upload" render={(props) => <UploadPost {...props}/>} />
            <Route exact path="/posts/:id" render={(props) => <Post {...props}/>} />
            <Route path="/posts/:id/edit" render={(props) => <EditPost {...props}/>} />
        </Router>
    )
}
// 오류 해결 출처:https://nyang-in.tistory.com/228