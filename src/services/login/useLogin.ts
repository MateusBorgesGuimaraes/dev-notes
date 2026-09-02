import { useMutation } from "@tanstack/react-query";
import { login } from "./login";
import { toast } from "sonner";
import { useAuthStore } from "../../stores/authStore";
import { useNavigate } from "@tanstack/react-router";

export function useLogin() {
  const setAuth = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      toast.success("Usuario logado com sucesso!");
      setAuth(data.token, data.user);
      navigate({ to: "/" });
    },
    onError: () => {
      toast.error("Erro ao logar com usuario.");
    },
  });
}
