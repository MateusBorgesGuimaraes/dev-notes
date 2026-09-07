import type { Comment as CommentType } from "../../../types/comments";
import { formatPostDate } from "../../../utils/formatPostDate";
import styles from "./comment.module.css";

type CommentProps = {
  comment: CommentType;
};

export const Comment = ({ comment }: CommentProps) => {
  return (
    <div className={styles.commentBody}>
      <div className={styles.commentHeader}>
        <h2>{comment.author_name}</h2>
        <p>·</p>
        <p>{formatPostDate(comment.created_at)}</p>
      </div>
      <p>{comment.content}</p>
    </div>
  );
};
