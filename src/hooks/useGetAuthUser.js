import { getUserDataFromCookies } from "@/api/getUserDataFromCookies";
import useUserStore from "@/store/userStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export function useGetAuthUser() {
  const { setUser, clearUser } = useUserStore();

  const query = useQuery({
    queryKey: ["user"],
    queryFn: () => getUserDataFromCookies(),
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (query.isSuccess && query.data) {
      console.log("data from get user Query", query.data);
      setUser(query.data);
    }

    if (query.isError) {
      console.log("error from get user Query", query.error);
      clearUser();
    }
  }, [
    query.isSuccess,
    query.isError,
    query.data,
    query.error,
    setUser,
    clearUser,
  ]);

  return query;
}
