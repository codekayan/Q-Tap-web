import { BASE_URL } from "@/utils/constants";
import axios from "axios";

export const getTableByBranchIdApi = async (branch_id) => {
  try {
    const res = await axios.get(`${BASE_URL}tables/${branch_id}`);

    return res.data.data || res.data;
  } catch (error) {
    throw error;
  }
};
