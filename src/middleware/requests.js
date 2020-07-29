import axios from "axios";

// Read
export const read = async (url) => {
  let feedback = {};
  await axios
    .get(url)
    .then((response) => {
      feedback = {
        status: response.status,
        message: response.data,
      };
    })
    .catch((err) => {
      if (err.response) {
        feedback = {
          status: err.code,
          message: err.response.data,
        };
      }
    });
  return feedback;
};

// Read with Query
export const readWithParams = async (url, query) => {
  let feedback = {};
  await axios
    .get(url, {
      params: {
        query,
      },
    })
    .then((response) => {
      feedback = {
        status: response.status,
        message: response.data,
      };
    })
    .catch((err) => {
      if (err.response) {
        feedback = {
          status: err.code,
          message: err.response.data,
        };
      }
    });
  return feedback;
};

// Post
export const post = async (url, data) => {
  let feedback = {};
  await axios
    .post(url, data)
    .then((response) => {
      feedback = {
        status: response.status,
        message: response.data,
      };
    })
    .catch((err) => {
      if (err.response) {
        feedback = {
          status: err.response.status,
          message: err.response.data,
        };
      }
    });
  return feedback;
};
