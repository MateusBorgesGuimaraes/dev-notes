import z from "zod";

export const commentSchema = z.object({
  author_name: z
    .string()
    .min(3, "O nome deve conter no minimo 3 caracteres")
    .max(255, "O nome pode ter no maximo 255 caracteres"),
  content: z.string().min(3, "O content deve conter no minimo 3 caracteres"),
});

export type CommentSchema = z.infer<typeof commentSchema>;
