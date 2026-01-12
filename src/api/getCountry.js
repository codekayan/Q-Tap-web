import { BASE_URL } from "@/utils/constants";
import axios from "axios";

export const getCountryApi = async () => {
  try {
    const response = await axios.get(`${BASE_URL}governorates`);
    return response;
  } catch (error) {
    throw error;
  }
};
