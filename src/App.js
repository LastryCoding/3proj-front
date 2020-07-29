import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import RoutePrivate from "./views/Index";
import Home from "./views/home";
import Login from "./components/auth/login";
import UserContext from "./context/UserContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "./App.css";

axios.defaults.baseURL =
  "https://europe-west3-proj-35f34.cloudfunctions.net/api/v1";

export default function App() {
  const [userData, setUserData] = useState({
    token: localStorage.getItem("auth-token"),
    user: undefined,
  });

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Switch>
            <Route path="/login" component={Login} />
            <RoutePrivate path="/" component={Home} />
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}
