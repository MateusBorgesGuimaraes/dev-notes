import { useQuery } from "@tanstack/react-query";
import { fetchTags } from "./fetchTags";

export function useFetchTags() {
  return useQuery({
    queryKey: ["tags"],
    queryFn: fetchTags,
  });
}
