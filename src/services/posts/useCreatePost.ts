import { useMutation } from "@tanstack/react-query";
import { createPost } from "./createPost";
import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";

export function useCreatePost() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      toast.success("Post criado com sucesso!");
      navigate({ to: "/admin" });
    },
    onError: () => {
      toast.error("Erro ao criar post.");
    },
  });
}
