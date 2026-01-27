import { BASE_URL } from "@/utils/constants";
import axios from "axios";

export const getMenuByBranchIdApi = async (branch_id) => {
  try {
    const res = await axios.get(`${BASE_URL}menu_by_branch/${branch_id}`);

    return res.data.data || res.data;
  } catch (error) {
    throw error;
  }
};
