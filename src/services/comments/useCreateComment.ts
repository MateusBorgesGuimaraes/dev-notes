import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { createCommentFn } from "./createComment";

export function useCreateComment() {
  return useMutation({
    mutationFn: createCommentFn,
    onSuccess: () => {
      toast.success("Comentario criado com sucesso!");
    },
    onError: () => {
      toast.error("Erro ao criar comentario.");
    },
  });
}
