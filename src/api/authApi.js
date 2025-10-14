import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// Login user
export const loginUser = async (credentials) => {
  try {
    const res = await axios.post(`${API_URL}/auth/login`, credentials);
    return res.data; // expected { token, data }
  } catch (error) {
    throw error.response?.data || { message: "Login failed" };
  }
};

// Register user
export const registerUser = async (userData) => {
  try {
    const res = await axios.post(`${API_URL}/auth/register`, userData);
    return res.data; // could be { message, user } or { token }
  } catch (error) {
    throw error.response?.data || {
      message: "Network error or server unreachable.",
    };
  }
};