import { forwardRef, type TextareaHTMLAttributes } from "react";
import styles from "./textarea.module.css";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  requerid?: boolean;
  label?: string;
  error?: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ requerid, label, error, ...props }, ref) => {
    return (
      <div className={styles.textareaBox}>
        {label && (
          <label>
            {label} {requerid && <span className={styles.req}>*</span>}{" "}
          </label>
        )}
        <textarea ref={ref} {...props} />
        {error && <p className={styles.err}>{error}</p>}
      </div>
    );
  },
);
Textarea.displayName = "Textarea";
