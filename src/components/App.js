import React, { useState, useEffect } from "react";
import Router from "./Router";
import GlobalStyles from "./GlobalStyles";

function App({location}) {
  const [loggedInStatus, setLoggedInStatus] = useState(sessionStorage.getItem("loggedIn"));
  const [loggedInUser, setLoggedInUser] = useState(sessionStorage.getItem("user"));

  return (
    <div>
        <Router loggedInUser={loggedInUser} loggedInStatus={loggedInStatus}/>
        <GlobalStyles />
    </div>
  )
}

export default App;