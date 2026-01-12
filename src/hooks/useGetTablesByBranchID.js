import { getTableByBranchIdApi } from "@/api/getTableByBranchId";
import { useQuery } from "@tanstack/react-query";

export function useGetTablesByBranchID(branch_id) {
  return useQuery({
    queryKey: ["tables", branch_id],
    queryFn: () => getTableByBranchIdApi(branch_id),
  });
}
