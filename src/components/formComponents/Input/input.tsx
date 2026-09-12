import { forwardRef, type InputHTMLAttributes } from "react";
import styles from "./input.module.css";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  requerid?: boolean;
  label?: string;
  error?: string;
  desc?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ requerid, label, error, desc, ...props }, ref) => {
    return (
      <div className={styles.inputBox}>
        {label && (
          <label>
            {label} {requerid && <span className={styles.req}>*</span>}{" "}
          </label>
        )}
        <input ref={ref} {...props} />
        {desc && <p className={styles.desc}>{desc}</p>}
        {error && <p className={styles.err}>{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";
