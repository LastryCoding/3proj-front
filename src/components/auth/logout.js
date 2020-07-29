import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import LoadingGif from "../loading/loading";

export default function Logout() {
  const history = useHistory();
  const { userData, setUserData } = useContext(UserContext);
  const [Loading, setLoading] = useState(true);

  const logout = async () => {
    setLoading(true);
    await localStorage.setItem("auth-token", "");
    await setUserData({
      token: undefined,
      user: undefined,
    });
    setLoading(false);
  };
  useEffect(() => {
    logout();
  }, []);

  if (Loading) {
    return <LoadingGif />;
  } else {
    history.push("/login");
    return null;
  }
}
