import { useFetchApprovedComments } from "../../../services/comments/useFetchApprovedComments";
import { Comment } from "../Comment/comment";
import styles from "./commentSection.module.css";

type CommentSectionProps = {
  postId: number;
};

export const CommentSection = ({ postId }: CommentSectionProps) => {
  const { data, isError, isLoading } = useFetchApprovedComments(postId);

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
          <h2>{comments.length} comentários</h2>

          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </>
      )}
    </section>
  );
};
