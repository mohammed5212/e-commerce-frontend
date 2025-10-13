import axios from "axios";

const API_URL = "https://e-commerce-wncj.onrender.com/api/auth"; 

// login
export const loginUser = async (credentials) => {
  try {
    const res = await axios.post(`${API_URL}/login`, credentials);
    return res.data; // should return { token, data }
  } catch (error) {
    throw error.response?.data || { message: "Login failed" };
  }
};

// register
export const registerUser = async (userData) => {
  try {
    const res = await axios.post(`${API_URL}/register`, userData);
    return res.data; // could { message, user } or { token }
  } catch (error) {
    throw error.response?.data || {
      message: "Network error or server unreachable.",
    };
  }
};
