import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerSchema,
  type RegisterSchema,
} from "../../pages/Register/register.schema";
import { useRegister } from "../../../services/register/useRegister";
import { Input } from "../../formComponents/Input/input";
import styles from "./registerForm.module.css";
import { Button } from "../../formComponents/Button/button";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const { mutate, isPending, error } = useRegister();

  const onSubmit = (data: RegisterSchema) => {
    mutate(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={styles.inputContainer}>
        <Input
          label="Nome"
          placeholder="Seu nome completo"
          type="text"
          requerid
          error={errors.name?.message}
          {...register("name")}
        />
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
          {isPending ? "Registrando..." : "Registrar"}
        </Button>
      </div>
    </form>
  );
};
