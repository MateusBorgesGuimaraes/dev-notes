import { Link } from '@tanstack/react-router';
import styles from './postList.module.css'

type PostListProps = {
  first?: boolean
  slug: string;
  created: string;
  title: string;
  excerpt: string
  tag: string
}

export const PostList = ({slug, created, tag, title, excerpt, first = false}: PostListProps) => {
  return <div className={`${styles.postList} ${first && styles.first}`}>
    <p className={`${styles.postHeader}`}>{created} · {tag}</p>
    <Link to='/posts/$slug' params={{ slug }}>
      <h2 className={`${styles.postTitle} ${first && styles.first}`}>{title}</h2>
      <p className={`${styles.postExcerpt} ${first && styles.first}`}>{excerpt}</p>
    </Link>
  </div>
}
