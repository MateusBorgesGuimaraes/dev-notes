import { useState } from "react";
import { useFetchApprovedComments } from "../../../services/comments/useFetchApprovedComments";
import { CreateComment } from "../../forms/CreateComment/createComment";
import { Comment } from "../Comment/comment";
import styles from "./commentSection.module.css";
import { ButtonLink } from "../ButtonLink/buttonLink";
import { useFetchAllComments } from "../../../services/comments/useFetchAllComments";

type CommentSectionProps = {
  postId: number;
  isAuthor?: boolean;
};

export const CommentSection = ({
  postId,
  isAuthor = false,
}: CommentSectionProps) => {
  const approvedQuery = useFetchApprovedComments(postId, {
    enabled: !isAuthor,
  });
  const allQuery = useFetchAllComments(postId, { enabled: isAuthor });

  const { data, isError, isLoading } = isAuthor ? allQuery : approvedQuery;

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
      <div className={styles.toggleBtn}>
        <ButtonLink
          size="sm"
          variant="accent"
          onClick={() => setShowCreateComment(!showCreateComment)}
          text={showCreateComment ? "Ocultar" : "Novo comentario"}
        />
      </div>
      {showCreateComment && <CreateComment postId={postId} />}
      {comments.length === 0 ? (
        <p>Nenhum comentário</p>
      ) : (
        <>
          <h2>{comments.length} comentários</h2>

          {comments.map((comment) => (
            <Comment isAuthor={isAuthor} key={comment.id} comment={comment} />
          ))}
        </>
      )}
    </section>
  );
};
