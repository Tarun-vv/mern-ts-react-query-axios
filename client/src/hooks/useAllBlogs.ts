import { useQuery } from "@tanstack/react-query";
import { fetchAllBlogs } from "../requests/data-service";

export function useAllBlogs() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchAllBlogs,
  });

  return { data, isLoading, error };
}
