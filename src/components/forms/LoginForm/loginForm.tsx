import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../formComponents/Input/input";
import styles from "./loginForm.module.css";
import { Button } from "../../formComponents/Button/button";
import { loginSchema, type LoginSchema } from "../../pages/Login/login.schema";
import { useLogin } from "../../../services/login/useLogin";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate, isPending, error } = useLogin();

  const onSubmit = (data: LoginSchema) => {
    mutate(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={styles.inputContainer}>
        <Input
          label="E-mail"
          placeholder="seu@email.com"
          type="email"
          requerid
          error={errors.email?.message}
          {...register("email")}
        />

        <Input
          label="Senha"
          placeholder="••••••••"
          type="password"
          requerid
          error={errors.password?.message}
          {...register("password")}
        />

        {error && (
          <p className={styles.err}>Credenciais inválidas. Tente novamente.</p>
        )}
      </div>

      <div className={styles.gap}>
        <Button type="submit" disabled={isPending}>
          {isPending ? "Entrando..." : "Entrar"}
        </Button>
      </div>
    </form>
  );
};
