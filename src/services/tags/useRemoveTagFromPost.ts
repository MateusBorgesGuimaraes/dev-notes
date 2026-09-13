import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { removeTagFromPost } from "./removeTagFromPost";

export function useRemoveTagFromPost(postId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (tagId: number) => removeTagFromPost(postId, tagId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["post-tags", postId] });
      toast.error("Tag removida.");
    },
    onError: () => {
      toast.error("Erro ao remover tag.");
    },
  });
}
