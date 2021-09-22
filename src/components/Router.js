import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "../screens/Home";
import Post from "../screens/Post";
import { UploadPost } from "../screens/UploadPost";
import { EditPost } from "../screens/EditPost";
import Login from "../screens/Login";
import Join from "../screens/Join";
import Profile from "../screens/Profile";
import { EditProfile } from "../screens/EditProfile";
import { EditPassword } from "../screens/EditPassword";

export default (props)=> {
    const loggedInUser = props.loggedInUser;
    const loggedInStatus = props.loggedInStatus; 
    return (
        <Router>
            <Route exact path="/" render={(props) => <Home loggedInStatus={loggedInStatus} {...props}/>} />
            <Route path="/join" render={(props) => <Join {...props}/>}>
              {loggedInStatus==="true" ? <Redirect to="/" {...props} /> : <Join {...props}/>}
            </Route>
            <Route path="/login" render={(props) => <Login {...props}/>}>
              {loggedInStatus==="true" ? <Redirect to="/" {...props} /> : <Login {...props}/>}
            </Route>
            <Route exact path="/users/:id([0-9a-f]{24})" render={(props) => <Profile {...props}/>} >
            </Route>
            <Route  path="/users/:id([0-9a-f]{24})/edit" render={(props) => <EditProfile {...props}/>}>  
              {loggedInStatus==="false" &&  <Redirect to="/" {...props} />}
            </Route>
            <Route  path="/users/:id([0-9a-f]{24})/change-password" render={(props) => <EditPassword {...props}/>}>  
              {loggedInStatus==="false" &&  <Redirect to="/" {...props} />}
            </Route>
            <Route exact path="/posts/upload" render={(props) => <UploadPost {...props}/>} >
              {loggedInStatus==="false" && <Redirect to="/" {...props} />}
            </Route>
            <Route exact path="/posts/:id([0-9a-f]{24})" render={(props) => <Post {...props}/>} >
            </Route>
            <Route path="/posts/:id([0-9a-f]{24})/edit" render={(props) => <EditPost {...props}/>} >
              {loggedInStatus==="false" && <Redirect to="/" {...props} />}
            </Route>
        </Router>
    )
}
// 오류 해결 출처:https://nyang-in.tistory.com/228