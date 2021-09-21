import React, { useState, useEffect } from "react";
import Router from "./Router";

function App({location}) {
  const [loggedInStatus, setLoggedInStatus] = useState(sessionStorage.getItem("loggedIn"));
  return (
    <div>
        <Router />
        <div>{loggedInStatus}</div>
    </div>
  )
}

export default App;