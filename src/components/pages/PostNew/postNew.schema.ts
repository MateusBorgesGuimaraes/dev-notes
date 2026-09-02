import { z } from "zod";

export const postNewSchema = z.object({
  title: z.string().min(3, "Título precisa ter ao menos 3 caracteres").max(255),
  slug: z
    .string()
    .min(3, "Slug precisa ter ao menos 3 caracteres")
    .max(255)
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Use apenas letras minúsculas, números e hífens",
    ),
  content: z.string().min(1, "O conteúdo não pode ficar vazio"),
  excerpt: z
    .string()
    .max(500, "Resumo muito longo")
    .optional()
    .or(z.literal("")),
  cover_image_url: z.string().url("URL inválida").optional().or(z.literal("")),
});

export type PostNewSchema = z.infer<typeof postNewSchema>;
