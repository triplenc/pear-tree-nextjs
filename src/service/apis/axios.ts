import axios from "axios";

export const api = axios.create({
  baseURL: process.env.API_URL,
  headers: { "X-Custom-Header": "foobar" },
  timeout: 1000,
});

// TODO: axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
