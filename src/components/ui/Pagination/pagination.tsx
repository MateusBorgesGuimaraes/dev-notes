import styles from "./pagination.module.css";

interface PaginationProps {
  page: number;
  onPageChange: (page: number) => void;
  hasNextPage: boolean;
}

export function Pagination({
  page,
  onPageChange,
  hasNextPage,
}: PaginationProps) {
  return (
    <div className={styles.pagination}>
      <button
        type="button"
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className={styles.button}
      >
        Anterior
      </button>

      <span className={styles.pageInfo}>Página {page}</span>

      <button
        type="button"
        onClick={() => onPageChange(page + 1)}
        disabled={!hasNextPage}
        className={styles.button}
      >
        Próxima
      </button>
    </div>
  );
}
