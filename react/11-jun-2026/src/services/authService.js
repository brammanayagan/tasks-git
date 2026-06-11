import axios from "axios";

// Modern beginner-level Axios API call with async/await and try/catch
export const loginUser = async (data) => {
  try {
    // In a real app, replace this URL with your actual backend endpoint
    const response = await axios.post("https://api.example.com/login", data);
    return response;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};
