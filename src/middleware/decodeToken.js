import axios from "axios";

export const decodeToken = async () => {
  let data;
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
        data = {
          token: response.data.token,
          user: response.data.user,
        };
      }
    })
    .catch((err) => {
      if (err.response.status === 400) {
        localStorage.setItem("auth-token", "");
        data = false;
      }
    });

  return data;
};
