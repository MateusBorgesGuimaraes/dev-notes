import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { aproveComment } from "./aproveComment";

export function useAproveComment(postId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: aproveComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
      toast.success("Comentário aprovado");
    },
    onError: () => {
      toast.error("Erro ao aprovar comentário.");
    },
  });
}
