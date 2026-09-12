import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createTag } from "./createTag";

export function useCreateTag() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createTag,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tags"] });
      toast.success("Tag criada com sucesso!");
    },
    onError: () => {
      toast.error("Erro ao criar tag.");
    },
  });
}
