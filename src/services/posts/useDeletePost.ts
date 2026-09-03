import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost } from "./deletePost";
import { toast } from "sonner";

export function useDeletePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      toast.success("Post excluído com sucesso!");
      queryClient.invalidateQueries({ queryKey: ["author-posts"] });
    },
    onError: () => {
      toast.error("Erro ao excluir post.");
    },
  });
}
