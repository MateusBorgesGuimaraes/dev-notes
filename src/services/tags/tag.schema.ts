import z from "zod";

export const tagSchema = z.object({
  name: z
    .string()
    .min(2, "O nome deve conter no minimo 2 caracteres")
    .max(100, "O nome pode ter no maximo 100 caracteres"),
});

export type TagSchema = z.infer<typeof tagSchema>;
