import React, { useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Home from "./home";
import axios from "axios";
import Logout from "../components/auth/logout";
import Navbar from "../components/navigation/navbar";

import "aos/dist/aos.css";
import { Container, Row } from "react-bootstrap";

import LoadingGif from "../components/loading/loading";

import UserContext from "../context/UserContext";

export default function Index() {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();
  const [Loading, setLoading] = useState(true);

  const checkLoggedIn = async () => {
    let token = localStorage.getItem("auth-token");
    if (token === null) {
      localStorage.setItem("auth-token", "");
      token = "";
    }
    await axios
      .get("auth/connect", {
        headers: { "x-auth-token": token },
      })
      .then((response) => {
        if (response.status === 200) {
          setUserData({
            token: response.data.token,
            user: response.data.user,
          });
        } else {
          localStorage.setItem("auth-token", "");
          setUserData({
            token: undefined,
            user: undefined,
          });
        }
      })
      .catch(async (err) => {
        console.error(err);
        if (err.response.status === 400) {
          await localStorage.setItem("auth-token", "");
        } else if (err.response.status === 500) {
          console.error(err.response.data);
          await localStorage.setItem("auth-token", "");
        } else {
          console.error(err.response);
          await localStorage.setItem("auth-token", "");
        }
      });
    setLoading(false);
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  if (Loading) {
    return <p>Loading ...</p>;
  } else {
    if (userData.user) {
      return (
        <Router>
          <Switch>
            <Route exact path="/">
              <Container fluid className="p-0">
                <Row className="m-0">
                  <Home />
                </Row>
              </Container>
            </Route>
            <Route exact path="/logout">
              <Logout />
            </Route>
          </Switch>
        </Router>
      );
    } else {
      history.push("/login");
      return null;
    }
  }
}
