import { useMutation } from "@tanstack/react-query";
import { register } from "./register";
import { login } from "../login/login";
import { toast } from "sonner";
import { useAuthStore } from "../../stores/authStore";
import { useNavigate } from "@tanstack/react-router";
import type { RegisterSchema } from "../../components/pages/Register/register.schema";

export function useRegister() {
  const setAuth = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data: RegisterSchema) => {
      await register(data);
      const loginResult = await login({
        email: data.email,
        password: data.password,
      });
      return loginResult;
    },
    onSuccess: (data) => {
      setAuth(data.token, data.user);
      toast.success("Conta criada com sucesso!");
      navigate({ to: "/" });
    },
    onError: () => {
      toast.error("Erro ao criar conta.");
    },
  });
}
