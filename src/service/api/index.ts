import axios, { AxiosError, AxiosRequestConfig } from "axios";

export const api = axios.create({
  baseURL: process.env.API_URL,
});

api.interceptors.request.use(
  <T extends { append?: unknown; session?: string }>(
    config: AxiosRequestConfig<T>,
  ) => {
    const cf = config;
    const data = cf?.data;
    cf.headers = cf.headers || {};
    if (data?.session) cf.headers.Authorization = data.session;
    return cf;
  },
  (err: AxiosError) => {
    return Promise.reject(err);
  },
);

export default api;
