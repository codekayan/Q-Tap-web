import { getCountryApi } from "@/api/getCountry";
import { useQuery } from "@tanstack/react-query";

export function useGetCountry() {
  return useQuery({
    queryKey: ["governorates"],
    queryFn: getCountryApi,
  });
}
