//api.js

import axios from "axios";

const API_BASE_URL = "https://ajackus-backend-dn66.onrender.com/api/users";

  
// Fetch all users
export const fetchUsers = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// Add a new user
export const addUser = async (userData) => {
  try {
    const response = await axios.post(API_BASE_URL, userData);
    return response.data;
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};

// Update a user
export const updateUser = async (id, userData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${id}`, userData);
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

// Delete a user
export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};
