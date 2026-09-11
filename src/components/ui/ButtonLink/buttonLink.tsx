import { Link } from "@tanstack/react-router";
import styles from "./buttonLink.module.css";

type Variant = "primary" | "outline" | "accent";
type Size = "sm" | "md";

type BaseProps = {
  text: string;
  variant?: Variant;
  size?: Size;
};

type ButtonLinkProps =
  | (BaseProps & {
      link: string;
      onClick?: never;
      type?: never;
      disabled?: never;
    })
  | (BaseProps & {
      link?: never;
      onClick: () => void;
      type?: "button" | "submit";
      disabled?: boolean;
    });

const variantClass: Record<Variant, string> = {
  primary: "primary",
  outline: "outline",
  accent: "accent",
};

export const ButtonLink = ({
  text,
  variant = "primary",
  size = "md",
  ...props
}: ButtonLinkProps) => {
  const className = [
    styles.buttonLink,
    styles[variantClass[variant]],
    size === "sm" ? styles.sm : styles.md,
  ].join(" ");

  if ("link" in props && props.link) {
    return (
      <Link className={className} to={props.link}>
        {text}
      </Link>
    );
  }

  const {
    onClick,
    type = "button",
    disabled,
  } = props as Extract<ButtonLinkProps, { onClick: () => void }>;

  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
