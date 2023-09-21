import axios from "axios";

export const $api = axios.create({
  url: "https://api.github.com",
});
