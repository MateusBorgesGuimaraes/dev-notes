import styles from "./button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  type?: "submit" | "reset" | "button";
  variant?: "primary" | "outline";
  disabled?: boolean;
};

export const Button = ({
  children,
  type = "button",
  variant = "primary",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      className={`${styles.customButton} ${variant === "primary" ? styles.primary : styles.outline}`}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};
