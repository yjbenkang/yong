import React, { useState, useEffect } from "react";
import Router from "./Router";

function App({location}) {
  const [loggedInStatus, setLoggedInStatus] = useState(sessionStorage.getItem("loggedIn"));
  return (
    <div>
        <Router loggedInStatus={loggedInStatus}/>
        <div>{loggedInStatus}</div>
    </div>
  )
}

export default App;