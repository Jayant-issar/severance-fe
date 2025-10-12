import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://api.example.com",
  headers: {
    "Content-Type": "application/json",
  },
});


//TODO: Figure out what to do with the interceptor 
axiosInstance.interceptors.request.use(
  (config) => {
    // Example: attach JWT if needed
    // const token = localStorage.getItem("token");
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // handle global errors like 401, 403 etc.
    return Promise.reject(error);
  }
);