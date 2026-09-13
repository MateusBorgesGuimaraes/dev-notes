import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { addTagToPost } from "./addTagToPost";

export function useAddTagToPost(postId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (tagId: number) => addTagToPost(postId, tagId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["post-tags", postId] });
      toast.error("Tag adicionada com sucesso.");
    },
    onError: () => {
      toast.error("Erro ao adicionar tag.");
    },
  });
}
