import { z } from "zod";

export const postEditSchema = z.object({
  title: z.string().min(3, "Título precisa ter ao menos 3 caracteres").max(255),
  content: z.string().min(1, "O conteúdo não pode ficar vazio"),
  excerpt: z
    .string()
    .max(500, "Resumo muito longo")
    .optional()
    .or(z.literal("")),
  cover_image_url: z.string().url("URL inválida").optional().or(z.literal("")),
});

export type PostEditSchema = z.infer<typeof postEditSchema>;
