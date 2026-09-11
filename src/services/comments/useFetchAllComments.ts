import { useQuery } from "@tanstack/react-query";
import { fetchAllCommentsByPost } from "./fetchAllCommentsByPost";

export function useFetchAllComments(
  postId: number,
  options?: { enabled?: boolean },
) {
  return useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchAllCommentsByPost(postId),
    enabled: options?.enabled ?? true,
  });
}
