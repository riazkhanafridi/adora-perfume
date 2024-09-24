import axios from "axios";

export const url = "http://localhost:3009";

// Create an Axios instance for general requests
export const baseUrl = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});

// Function to get the token from storage
const getAuthToken = () => localStorage.getItem("token");

// Interceptor to dynamically attach the token to requests
baseUrl.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
 
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Create an Axios instance for form-data requests
export const baseUrlForm = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

// Interceptor for form-data requests
baseUrlForm.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});
