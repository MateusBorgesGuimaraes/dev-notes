import styles from "./viewToggle.module.css";

export type ViewMode = "card" | "list";

interface ViewToggleProps {
  value: ViewMode;
  onChange: (mode: ViewMode) => void;
}

export function ViewToggle({ value, onChange }: ViewToggleProps) {
  return (
    <div
      className={styles.toggle}
      role="group"
      aria-label="Alternar visualização"
    >
      <button
        type="button"
        className={`${styles.option} ${value === "list" ? styles.active : ""}`}
        onClick={() => onChange("list")}
        aria-pressed={value === "list"}
      >
        Lista
      </button>
      <button
        type="button"
        className={`${styles.option} ${value === "card" ? styles.active : ""}`}
        onClick={() => onChange("card")}
        aria-pressed={value === "card"}
      >
        Cards
      </button>
    </div>
  );
}
