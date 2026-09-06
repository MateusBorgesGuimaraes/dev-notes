import { Link } from "@tanstack/react-router";
import styles from "./postCard.module.css";

type PostCardProps = {
  first?: boolean;
  slug: string;
  created: string;
  title: string;
  imageUrl: string;
  excerpt: string;
  tag: string;
};

export const PostCard = ({
  slug,
  created,
  tag,
  title,
  excerpt,
  imageUrl,
  first = false,
}: PostCardProps) => {
  return (
    <div className={`${styles.postCard} ${first && styles.first}`}>
      <div className={`${styles.postCardImg}`}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={`${styles.postCardContent}`}>
        <span className={`${styles.postCardTag}`}>{tag}</span>
        <Link to="/posts/$slug" params={{ slug }}>
          <h2 className={`${styles.postCardTitle}`}>{title}</h2>
        </Link>
        <p className={`${styles.postCardExcerpt}`}>{excerpt}</p>
        <span className={`${styles.postCardCreated}`}>{created}</span>
      </div>
    </div>
  );
};
