import { useState } from "react";
import { useFetchApprovedComments } from "../../../services/comments/useFetchApprovedComments";
import { CreateComment } from "../../forms/CreateComment/createComment";
import { Comment } from "../Comment/comment";
import styles from "./commentSection.module.css";
import { ButtonLink } from "../ButtonLink/buttonLink";

type CommentSectionProps = {
  postId: number;
};

export const CommentSection = ({ postId }: CommentSectionProps) => {
  const { data, isError, isLoading } = useFetchApprovedComments(postId);
  const [showCreateComment, setShowCreateComment] = useState(false);

  if (isError) {
    return <p>Erro ao buscar comentários</p>;
  }

  if (isLoading) {
    return <p>Carregando comentários...</p>;
  }

  const comments = data ?? [];

  return (
    <section className={styles.commentsContainer}>
      {comments.length === 0 ? (
        <p>Nenhum comentário</p>
      ) : (
        <>
          <div className={styles.toggleBtn}>
            <ButtonLink
              onClick={() => setShowCreateComment(!showCreateComment)}
              text={showCreateComment ? "Ocultar" : "Novo comentario"}
            />
          </div>
          {showCreateComment && <CreateComment postId={postId} />}
          <h2>{comments.length} comentários</h2>

          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </>
      )}
    </section>
  );
};
