import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:3001/api",
});

export default api;
