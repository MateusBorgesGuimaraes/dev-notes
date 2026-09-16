import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePost } from "./updatePost";
import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";
import type { PostEditSchema } from "../../components/pages/PostEdit/postEdit.schema";

export function useUpdatePost(id: number) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: PostEditSchema) => updatePost(id, data),
    onSuccess: () => {
      toast.success("Post atualizado com sucesso!");
      queryClient.invalidateQueries({ queryKey: ["author-posts"] });
      queryClient.invalidateQueries({ queryKey: ["post", id] });
      navigate({ to: "/admin" });
    },
    onError: () => {
      toast.error("Erro ao atualizar post.");
    },
  });
}
