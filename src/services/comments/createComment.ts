import { api } from "../api";
import type { CommentSchema } from "./comment.schema";

type CreateCommentVariables = {
  comment: CommentSchema;
  postId: number;
};

export async function createCommentFn({
  comment,
  postId,
}: CreateCommentVariables) {
  const response = await api.post(`/posts/${postId}/comments`, comment);
  return response.data;
}
