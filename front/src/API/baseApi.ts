import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "PROCESS.ENV.BASE_URL",
  headers: {
    "Content-Type": "application/json",
  },
});

const interceptors = axiosInstance.interceptors;

interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${""}`;
  return config;
});

interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.message),
);

export default axiosInstance;
