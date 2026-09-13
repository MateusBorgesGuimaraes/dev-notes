import { useQuery } from "@tanstack/react-query";
import { fetchPostTags } from "./fetchPostTags";

export function useFetchPostTags(
  postId: number,
  options?: { enabled?: boolean },
) {
  return useQuery({
    queryKey: ["post-tags", postId],
    queryFn: () => fetchPostTags(postId),
    enabled: options?.enabled ?? true,
  });
}
