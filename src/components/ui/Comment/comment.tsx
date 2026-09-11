import { useConfirm } from "../../../hooks/useConfirm";
import { useAproveComment } from "../../../services/comments/useAproveComment";
import { useDeleteComment } from "../../../services/comments/useDeleteComment";
import type { Comment as CommentType } from "../../../types/comments";
import { formatPostDate } from "../../../utils/formatPostDate";
import { ConfirmDialog } from "../ConfirmDialog/confirmDialog";
import styles from "./comment.module.css";

type CommentProps = {
  comment: CommentType;
  isAuthor?: boolean;
};

export const Comment = ({ comment, isAuthor }: CommentProps) => {
  const { mutate: approveComment, isError } = useAproveComment(comment.post_id);
  const { mutate: deleteComment } = useDeleteComment(comment.post_id);
  const { isOpen, requestConfirm, handleConfirm, handleCancel } = useConfirm();

  if (isError) return <p>Erro ao aprovar comentário</p>;
  return (
    <div className={styles.commentBody}>
      <div className={styles.commentHeader}>
        <div className={styles.fistPart}>
          <h2>{comment.author_name}</h2>
          <p>·</p>
          <p>{formatPostDate(comment.created_at)}</p>
        </div>
        {isAuthor && (
          <div className={styles.btns}>
            {comment.status !== "approved" && (
              <button onClick={() => approveComment(comment.id)}>
                Aprovar
              </button>
            )}
            <button
              onClick={() => requestConfirm(() => deleteComment(comment.id))}
            >
              Excluir
            </button>
          </div>
        )}
      </div>
      <p>{comment.content}</p>
      <ConfirmDialog
        open={isOpen}
        title="Excluir comentário"
        message={`Tem certeza que quer excluir o comentário de ${comment.author_name}?`}
        confirmText="Excluir"
        variant="danger"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  );
};
