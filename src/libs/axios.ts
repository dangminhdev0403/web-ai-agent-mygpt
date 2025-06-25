import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor cho request
api.interceptors.request.use(
  (config) => {
    // Nếu có token hoặc header chung
    // config.headers.Authorization = `Bearer ${token}`;
    console.log("[Axios] Request:", config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    return Promise.reject(
      error instanceof Error ? error : new Error(String(error))
    );
  }
);

// Interceptor cho response
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error(
      "[Axios] Response Error:",
      error?.response?.data ?? error.message
    );
    return Promise.reject(
      error instanceof Error ? error : new Error(String(error))
    );
  }
);

export default api;
