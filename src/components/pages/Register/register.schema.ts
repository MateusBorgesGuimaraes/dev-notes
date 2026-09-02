import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(3, "O nome deve conter no minimo 3 caracteres"),
  email: z.email("Email invalido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
