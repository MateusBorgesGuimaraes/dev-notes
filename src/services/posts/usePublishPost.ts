import { useMutation, useQueryClient } from "@tanstack/react-query";
import { publishPost } from "./publishPost";
import { toast } from "sonner";

export function usePublishPost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: publishPost,
    onSuccess: () => {
      toast.success("Post publicado com sucesso!");
      queryClient.invalidateQueries({ queryKey: ["author-posts"] });
    },
    onError: () => {
      toast.error("Erro ao publicar post.");
    },
  });
}
