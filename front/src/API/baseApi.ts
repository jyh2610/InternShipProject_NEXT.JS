import axios from "axios";

const url = process.env.NEXT_PUBLIC_BASE_URL;

const axiosInstance = axios.create({
  baseURL: url,
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
