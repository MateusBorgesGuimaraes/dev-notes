import { useQuery } from "@tanstack/react-query";
import { fetchPostById } from "./fetchPostById";

export function useFetchPostById(id: number) {
  return useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchPostById(id),
  });
}
