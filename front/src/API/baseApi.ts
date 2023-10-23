import axios from "axios";

// const url = process.env.NODE_ENV_BASE_URL;

const axiosInstance = axios.create({
  baseURL: "http://192.168.0.18:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

const interceptors = axiosInstance.interceptors;

interceptors.request.use((config) => {
  return config;
});

interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.message),
);

export default axiosInstance;
