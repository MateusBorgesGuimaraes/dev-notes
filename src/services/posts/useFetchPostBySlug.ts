import { useQuery } from "@tanstack/react-query";
import { fetchPostBySlug } from "./fetchPostBySlug";

export function useFetchPostBySlug(slug: string) {
  return useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPostBySlug(slug),
  });
}
