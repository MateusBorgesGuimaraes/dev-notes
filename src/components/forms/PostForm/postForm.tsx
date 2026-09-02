import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState } from "react";
import {
  postNewSchema,
  type PostNewSchema,
} from "../../pages/PostNew/postNew.schema";
import { useCreatePost } from "../../../services/posts/useCreatePost";
import { useUploadImage } from "../../../services/uploads/useUploadImage";
import { Input } from "../../formComponents/Input/input";
import { Textarea } from "../../formComponents/Textarea/textArea";
import { Button } from "../../formComponents/Button/button";
import styles from "./postForm.module.css";

export const PostForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<PostNewSchema>({
    resolver: zodResolver(postNewSchema),
  });

  const { mutate, isPending } = useCreatePost();
  const { mutate: uploadImage, isPending: isUploading } = useUploadImage();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const content = watch("content");
  const coverImageUrl = watch("cover_image_url");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadError(null);
    setPreviewUrl(URL.createObjectURL(file));

    uploadImage(file, {
      onSuccess: (data) => {
        setValue("cover_image_url", data.url, { shouldValidate: true });
      },
      onError: () => {
        setUploadError("Falha ao enviar a imagem. Tente novamente.");
        setPreviewUrl(null);
      },
    });
  };

  const onSubmit = (data: PostNewSchema) => {
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className={styles.form}>
      <Input
        label="Título"
        placeholder="Título do post"
        type="text"
        requerid
        error={errors.title?.message}
        {...register("title")}
      />

      <Input
        label="Slug"
        placeholder="url-amigavel-do-post"
        type="text"
        requerid
        error={errors.slug?.message}
        {...register("slug")}
      />

      <div className={styles.row}>
        <Input
          label="Resumo (excerpt)"
          placeholder="Resumo curto do post"
          type="text"
          error={errors.excerpt?.message}
          {...register("excerpt")}
        />

        <div className={styles.coverUpload}>
          <label className={styles.coverLabel}>Imagem de capa</label>

          <label htmlFor="cover-upload" className={styles.dropzone}>
            {previewUrl || coverImageUrl ? (
              <img
                src={previewUrl ?? coverImageUrl}
                alt="Preview da capa"
                className={styles.coverPreview}
              />
            ) : (
              <div className={styles.dropzonePlaceholder}>
                <span className={styles.dropzoneIcon}>+</span>
                <span>Clique para enviar uma imagem</span>
                <span className={styles.dropzoneHint}>
                  JPG, PNG, WEBP ou GIF — até 5MB
                </span>
              </div>
            )}

            <input
              id="cover-upload"
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              onChange={handleFileChange}
              disabled={isUploading}
              className={styles.hiddenInput}
            />
          </label>

          {isUploading && (
            <span className={styles.uploadStatus}>Enviando imagem...</span>
          )}
          {uploadError && <span className={styles.error}>{uploadError}</span>}

          <input type="hidden" {...register("cover_image_url")} />
          {errors.cover_image_url?.message && (
            <span className={styles.error}>
              {errors.cover_image_url.message}
            </span>
          )}
        </div>
      </div>

      <div className={styles.editorStack}>
        <Textarea
          label="Conteúdo (markdown)"
          placeholder="Escreva o post em markdown..."
          requerid
          error={errors.content?.message}
          {...register("content")}
        />

        <div className={styles.previewBox}>
          <span className={styles.previewLabel}>Preview</span>
          <div className={styles.preview}>
            {content ? (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
              </ReactMarkdown>
            ) : (
              <p className={styles.previewEmpty}>
                A pré-visualização aparece aqui.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        <Button
          type="submit"
          variant="primary"
          disabled={isPending || isUploading}
        >
          {isPending ? "Criando..." : "Criar post"}
        </Button>
      </div>
    </form>
  );
};
