import axios from "axios";

export default axios.create({
  baseUrl: "https://gateway.marvel.com:443/v1/public",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});
