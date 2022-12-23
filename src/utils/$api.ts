import axios from "axios";

export const $api = axios.create({
  baseURL: "http://20.251.29.89:8083/",
  headers: {
    "API-KEY": "secret-api-key",
  },
});

