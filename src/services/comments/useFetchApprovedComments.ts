import { useQuery } from "@tanstack/react-query";
import { fetchApprovedCommentsByPost } from "./fetchApprovedCommentsByPost";

export function useFetchApprovedComments(postId: number) {
  return useQuery({
    queryKey: ["comment", postId],
    queryFn: () => fetchApprovedCommentsByPost(postId),
  });
}
