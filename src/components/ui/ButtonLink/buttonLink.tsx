import { Link } from "@tanstack/react-router";
import styles from "./buttonLink.module.css";

type Variant = "primary" | "outline";

type BaseProps = {
  text: string;
  variant?: Variant;
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

export const ButtonLink = ({
  text,
  variant = "primary",
  ...props
}: ButtonLinkProps) => {
  const className = `${styles.buttonLink} ${variant === "primary" ? styles.primary : styles.outline}`;

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
