import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteTag } from "./deleteTag";

export function useDeleteTag() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTag,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tags"],
      });

      toast.success("Tag excluída com sucesso!");
    },

    onError: () => {
      toast.error("Erro ao excluir tag.");
    },
  });
}
