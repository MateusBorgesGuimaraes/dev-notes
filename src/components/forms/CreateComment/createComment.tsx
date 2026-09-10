import { useForm } from "react-hook-form";
import {
  commentSchema,
  type CommentSchema,
} from "../../../services/comments/comment.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateComment } from "../../../services/comments/useCreateComment";
import { Input } from "../../formComponents/Input/input";
import { Textarea } from "../../formComponents/Textarea/textArea";
import { Button } from "../../formComponents/Button/button";
import styles from "./createComment.module.css";

type CreateCommentProps = {
  postId: number;
};

export const CreateComment = ({ postId }: CreateCommentProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CommentSchema>({
    resolver: zodResolver(commentSchema),
  });

  const { mutate, isPending } = useCreateComment();

  const onSubmit = (data: CommentSchema) => {
    mutate({
      comment: data,
      postId,
    });
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={styles.createComment}
    >
      <Input
        label="Nome do autor"
        placeholder="Joao Silva"
        type="text"
        requerid
        error={errors.author_name?.message}
        {...register("author_name")}
      />

      <Textarea
        className={styles.commentTextarea}
        label="Conteúdo"
        placeholder="Escreva o comentario..."
        requerid
        error={errors.content?.message}
        {...register("content")}
      />

      <div className={styles.actions}>
        <Button type="submit" variant="primary" size="sm" disabled={isPending}>
          {isPending ? "Salvando..." : "Salvar comentario"}
        </Button>
      </div>
    </form>
  );
};
