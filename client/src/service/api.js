import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/form"; // change this to your real backend

export const getApplications = async () => {
  const response = await axios.get(`${API_BASE_URL}/applications`);
  return response.data;
};
