import React, { useState, useEffect } from "react";
import Router from "./Router";

function App({location}) {
  const [loggedInStatus, setLoggedInStatus] = useState(sessionStorage.getItem("loggedIn"));
  const [loggedInUser, setLoggedInUser] = useState(sessionStorage.getItem("user"));

  return (
    <div>
        <Router loggedInUser={loggedInUser} loggedInStatus={loggedInStatus}/>
        <div>{loggedInStatus}</div>
        <div>{loggedInUser}</div>
    </div>
  )
}

export default App;