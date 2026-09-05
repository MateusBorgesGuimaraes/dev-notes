import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./markdownContent.module.css";

interface MarkdownContentProps {
  content: string;
  emptyMessage?: string;
}

export function MarkdownContent({
  content,
  emptyMessage = "A pré-visualização aparece aqui.",
}: MarkdownContentProps) {
  if (!content) {
    return <p className={styles.empty}>{emptyMessage}</p>;
  }

  return (
    <div className={styles.markdown}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
