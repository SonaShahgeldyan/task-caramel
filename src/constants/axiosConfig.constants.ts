import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API;

axios.defaults.headers.common = {
  ...axios.defaults.headers.common,
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};

export default axios;
